import auth0 from 'auth0-js';
const REDIRECT_ON_LOGIN= "redirect_on_login";

//almacenamiento en memoria
//eslint-disable-next-line
let _idToken = null;
let _accessToken = null;
let _scopes=null;
let _expiresAt=null;

export default class Auth {
    constructor(history){
        this.userProfile = null;
        this.history= history;
        this.requestedScopes= "openid profile email read:courses";
        this.auth0= new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
            responseType:"token id_token",
            scope: this.requestedScopes
        })
    }

    /**
     * @description: función para hacer login
     * - guarda en localStorage el lugar desde donde llamo al login
     * - muestra el login de Auth0
     */
    login = () =>{
        localStorage.setItem(REDIRECT_ON_LOGIN, JSON.stringify(this.history.location))
        this.auth0.authorize();
    }

    /**
     *  @description: función para esperar "luego del login" (callback)
     *  - desde el dashboard de Auth0 definir la ruta  
     *  - esperar información luego del login con esta función en el ComponentDidMount
     *  - enviar data a setSession
     *  - redireccionar a la página antes de hacer login (para que el usuario no vea el callback) 
     */
    handleAuth = () =>{
        this.auth0.parseHash((err, authResult)=>{
            if (authResult && authResult.accessToken && authResult.idToken){
                
                this.setSession(authResult);
                const redirectLocation = localStorage.getItem(REDIRECT_ON_LOGIN) === "undefined" 
                    ? "/"
                    :JSON.parse(localStorage.getItem(REDIRECT_ON_LOGIN));
                this.history.push(redirectLocation)
            }else if (err){
                this.history.push("/");
                alert(`Error ${err.error}`); console.log(err);
            }
            localStorage.removeItem(REDIRECT_ON_LOGIN);
        })
    }

    /**
     * @description: almacena los tokens
     *  authResult.expiresIn: segundos en los que expira
     *  Date().getTime(): fecha actual en formato Unix
     * 
     *  expiresAt: fecha en la que se vence el token en formato UNIX
     */
    setSession = authResult =>{
        _expiresAt = authResult.expiresIn *1000 + new Date().getTime();
        _scopes = authResult.scope || this.requestedScopes || "";
        _idToken= authResult.idToken;
        _accessToken=authResult.accessToken;
    }

    /**
     *  @description: función que sirve para saber si el usuario esta logeado o no.
     * Muy util para mostrar en Nav el botón de login/logout
     */
    isAuthenticated=()=>{
        return new Date().getTime() < _expiresAt;
    }
    
    /**
     * @description: borrar datos de login del usuario
     * - elimina lo almacenado en localStorage
     * - borra los datos del cookie de Auth con auth0.logout()
     * - desde el Dashboard de Auth0 elegir donde se redireccionará
     */
    logout = () =>{
        this.auth0.logout({
            clientID:process.env.REACT_APP_AUTH0_CLIENT_ID,
            returnTo:"http://localhost:3000"
        })
    }

    getAccessToken = () =>{
        if (!_accessToken) throw new Error("no hay token");
        return _accessToken;
    }

    /**
     * fn = callback
     */
    getProfile = fn => {
        if (this.userProfile) return fn(this.userProfile);

        this.auth0.client.userInfo(this.getAccessToken(), (err,profile)=>{
            if (profile) this.userProfile = profile;
            fn(profile, err);
        })
    }

    /**
     *  compara un lista de permisos almacenados con una lista de permisos (scopes)
     * devuelve true si tiene todos los permisos 
     */
    userHasScopes= (scopes)=>{
        const grantedScopes = (_scopes||"").split(" ");
        return scopes.every(scope=>grantedScopes.includes(scope));
    }

    /**función para renovar token: necesitamos desplegar esto antes que la app se muestre
     * así sabemos si esta logeado
     * 
     */
    renewToken= cb=>{
        this.auth0.checkSession({/**audience scope */},(err,result)=>{
            if(err) console.log(`error: ${err.error}: ${err.description}`)
            else this.setSession(result);
            
            if (cb) cb(err,result)
        })
    }

}