import auth0 from 'auth0-js';
export default class Auth {
    constructor(history){
        this.userProfile = null;
        this.history= history;
        this.auth0= new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
            responseType:"token id_token",
            scope: "openid profile email"
        })
    }

    login = () =>{
        this.auth0.authorize();
    }

    /**
     *  @description: función para esperar "luego del login" (callback)
     *  - desde el dashboard de Auth0 definir la ruta  
     *  - esperar información luego del login con esta función en el ComponentDidMount
     *  - enviar data a setSession
     *  - redireccionar al Inicio (para que el usuario no vea el callback) 
     */
    handleAuth = () =>{
        this.auth0.parseHash((err, authResult)=>{
            if (authResult && authResult.accessToken && authResult.idToken){
                this.setSession(authResult);
                this.history.push("/")
            }else if (err){
                this.history.push("/");
                alert(`Error ${err.error}`); console.log(err);
            }
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
        const expiresAt = JSON.stringify(authResult.expiresIn *1000 + new Date().getTime());
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
    }

    /**
     *  @description: función que sirve para saber si el usuario esta logeado o no.
     * Muy util para mostrar en Nav el botón de login/logout
     */
    isAuthenticated=()=>{
        const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }
    
    /**
     * @description: borrar datos de login del usuario
     * - elimina lo almacenado en localStorage
     * - borra los datos del cookie de Auth con auth0.logout()
     * - desde el Dashboard de Auth0 elegir donde se redireccionará
     */
    logout = () =>{
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        this.userProfile= null;

        this.auth0.logout({
            clientID:process.env.REACT_APP_AUTH0_CLIENT_ID,
            returnTo:"http://localhost:3000"
        })
    }

    getAccessToken = () =>{
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) throw new Error("no hay token");
        return accessToken;
    }

    /**
     * cb = callback
     */
    getProfile = cb => {
        if (this.userProfile) return cb(this.userProfile);

        this.auth0.client.userInfo(this.getAccessToken(), (err,profile)=>{
            if (profile) this.userProfile = profile;
            cb(profile, err);
        })

    }

}