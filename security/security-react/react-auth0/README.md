## Auth0 con react

```
npx create-react-app react-auth0
npm i express express-jwt express-jwt-authz jwks-rsa auth0-js auth0-lock react-router-dom
yarn add npm-run-all --dev
```

## Estrategias usadas:

- OAuth flow: implicito
  - Redirigir a la página de autenticación de Auth0
  - Auth0 redirige a la app
  - App lee los tokens de la URL

Hay tres pantallas:

- Universal: es un widget de Auth0. Fácil de implementar, el más seguro y es
- Embedded Lock: es un widget de Auth0 que es más inseguro por las terceras partes que usa.
- Custom UI: es el menos seguro pero más personalizable, es necesario realizar llamadas al API de Auth0

Los widgets son:

- fáciles de integrar con Auth0
- se adapta a tu configuración
- se ven bien en cualquier dispositivo
- recuerda la última vez que fue conectado
- soporte internacional
- personalizable

## Aplicando autenticación

### Auth.JS

creo un nuevo archivo ("Auth/Auth.js"), en donde defino una clase para usar una instancia de Auth0:

```
class Auth {
    constructor(history){
        this.history= history;
        this.auth0= new auth0.WebAuth({... })
    }

    login = () =>{ this.auth0.authorize();}
    handleAuth=()=>{ this.auth0.parseHash()=>{}}
    setSession=()=>{}
    isAuthenticated=()=>{}
    logout = () =>{this.auth0.logout({})
    getAccessToken = () =>{}
    getProfile = fn => {this.auth0.client.userInfo()}
}
```

Notar que:

- en el constructor voy guardando el history para moverme entre las páginas
- this.auth0: es una instancia para usar Auth0 con Auth0-js
- login: será la función que permita la redirección a la página de Auth0
- handleAuth: ocurrirá luego del login
- setSession: guardará los datos del login
- isAuthenticated: devolverá un booleano para saber si el usuario esta logeado
- logout: cerrar sesión
- getAccessToken: booleano para saber si se obtuvieron datos luego del login
- getProfile: dar los datos del perfil del usuario

### Auth0 redirige a la app

Desde un botón en "./Home.js" llamó al evento login:

```
  <button onClick={this.props.auth.login}>Log In</button>
```

### App lee los tokens de la URL

Una vez que Auth0 redirige devuelve una lista de tokens

- access_token: no es un JWT
- expires_in: segundos hasta que expire (usualmente es 2 horas)
- token_type: esquema de autenticación
- state: valor usado por Auth0 para distinguir a la aplicación
- id_token: JWT Token

```
{
  "access_token": "eyJz93a...k4laUWw",
  "expires_in": 7200,
  "token_type": "Bearer",
  "state": "uVkhjkuU07hJKh9",
  "id_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}

```

## Almacenamiento de token

|                                  | LocalStorage | SessionStorage | Cookie     | En memoria        |
| -------------------------------- | ------------ | -------------- | ---------- | ----------------- |
| Persiste con navegador cerrado   | Y            |                | Opcional   | (vía Silent Auth) |
| Persiste con pestaña cerrada     | Y            |                | Y          | (vía Silent Auth) |
| Persiste entre pestañas          | Y            |                | Y          | (vía Silent Auth) |
| Acceso a sub-dominios            |              |                | Y          |                   |
| Enviado en c/solicitud (request) |              |                | Y          |                   |
| Tamaño máximo                    | 2-10MB       | 5-10MB         | 4K/dominio | Sin límite        |
| vulnerable XSRF                  |              |                | Y          |                   |
| vulnerable XSS                   | Y            | Y              | Y          | Y                 |

Notar que:

- Cookies son vulnerables en XSRF, lo que significa que los atacantes pueden hacer que el navegador del usuario pueda realizar acciones no solicitadas mientras el usuario está logeado.
- Las cookies requiere que en todas los request sean enviados nuevamente gastando ancho de banda.
- Las cookies son recomendadas si tu aplicación tiene un servidor dedicado con 'secure flag' o 'httpOnly'

### XSS

- el atacante inyecta código en el lado del cliente
- Riesgo: perder el control del contenido del usuario
- ejemplo: `app.com?q=<script%20type='text/javascript'>alert('xss');</script> `

### No almacenar tokens en Local Storage

El almacenamiento local (o por sesión) en el navegador no es seguro. Cualquier dato que sea almacenado en ese lugar puede ser vulnerado por XSS. Si un atacante obtiene un token, ellos pueden tener acceso y hacer pedidos a tu API.

Si tu app tiene backend entonces debería implementarse el mismo usando la implementación de Auth0 para ese backend(NodeJS, Python, Java, .Net)

Para SPA es mejor almacenarlo en memoria sin persistencia, se debería pedir nuevos tokens al cargar la página. Para llamar al API deberías usar una copia en memoria del token. Si el usuario cambia de pestaña o la cierra no necesariamente pierde su token, se puede usar 'silent auth' para evitar este problema.

## Trabajando con un API

para usar el backend y el front en el mismo servidor:

- [usar proxy en package.json](https://create-react-app.dev/docs/proxying-api-requests-in-development/).

## Validar un JWT

- verificar con firma: Auth0 provee un json web key (jwks) para probar que correctamente se llame al API.
  El archivo se encuentra en http://my-auth-domain/.well-known/jwks.json. El JWKs es una llave criptografica, las partes del objeto representan las propiedades de la llave y sus valores. Nuestra API utilizará esta información para verificar el JWT

```
{"keys":[
  {"alg": "RS256, "kty":"RSA", "use": "sig", "x5c":["MICC..]},],
  "n":"ydmJ..", "e":"AQAB", "kid": "NVljj0BPKOIUYTSCVBJHGFVJBJBH", "x5t": "NVljj0BPKOIUYTSCVBJHGFVJBJBH"
}
```

- validar las solicitudes:
  - exp (expiration): confirma que no haya expirado
  - iss (issued by): confirmar que sea igual al dominio de Auth0
  - aud (Audience): confirmar que sea igual a tu clientID

## OAuth 2

- Brinda permisos sin compartir credenciales (sin compartir username o password)
- cada permiso que tu brindas se llama 'scope'
- Los 'scopes' delegan permisos, son las acciones que una app puede hacer por medio del usuario

## Reglas

Una regla en Auth es una función con los siguientes argumentos:

- user: el objeto usuario que viene del proveedor de identidad. [Más info](https://auth0.com/docs/rules/references/user-object)
- context: un objeto que contiene información de la actual transacción como la IP del usuario, aplicación o ubicación. [Más info](https://auth0.com/docs/rules/references/context-object)
- callback: función para enviar los tokens a Auth0.

Una vez que el usuario ingresa sesión se aplican.

### Creando una regla [ejemplo]

#### regla: Usuarios con x dominio pasan a ser admin

```
function setRolesToUser(user, context, callback) {

  // Roles should only be set to verified users.
  if (!user.email || !user.email_verified) {
    return callback(null, user, context);
  }

  user.app_metadata = user.app_metadata || {};
  // You can add a Role based on what you want
  // In this case I check domain
  const addRolesToUser = function (user) {
    const endsWith = '@midominio.com';

    if (user.email && (user.email.substring(user.email.length - endsWith.length, user.email.length) === endsWith)) {
      return ['admin'];
    }
    return ['user'];
  };

  const roles = addRolesToUser(user);

  user.app_metadata.roles = roles;
  auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
    .then(function () {
      context.idToken['http://localhost:3000/roles'] = user.app_metadata.roles;
      callback(null, user, context);
    })
    .catch(function (err) {
      callback(err);
    });
}

```

#### usuario

```
  {
    "created_at": "2020-04-24T17:53:53.325Z",
    "email": "xxxxxxxxxxxx@mydominio.com",
    "email_verified": true,
    "family_name": "Surname",
    "given_name": "Name",
    "identities": [
        {
            "provider": "google-oauth2",
            "user_id": "100000000000000000000",
            "connection": "google-oauth2",
            "isSocial": true
        }
    ],
    "locale": "en",
    "name": "X",
    "nickname": "nick",
    "picture": "https://.../photo.jpg",
    "updated_at": "2020-04-24T17:58:07.420Z",
    "user_id": "google-oauth2|100000000000000000000",
    "last_ip": "101.101.101.101",
    "last_login": "2020-04-24T17:58:07.420Z",
    "logins_count": 2,
    "blocked_for": [],
    "guardian_authenticators": []
}
```

#### context

```
{
  "clientID": "123456789",
  "clientName": "MyWebApp",
  "connection": "MyDbConn",
  "connectionStrategy": "auth0",
  "protocol": "oidc-basic-profile",
  "request": {
    "query": {
      "scope": "openid"
    },
    "body": {},
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.107 Safari/537.36",
    "ip": "X.X.X.X",
    "geoip": {
      "country_code": "AR",
      "country_code3": "ARG",
      "country_name": "Argentina",
      "region": "08",
      "city": "Federal",
      "postal_code": "3180",
      "latitude": -31,
      "longitude": -59,
      "continent_code": "SA",
      "time_zone": "America/Argentina/Buenos_Aires"
    }
  },
  "samlConfiguration": {},
  "stats": {
    "loginsCount": 5
  },
  "accessToken": {},
  "idToken": {}
}
```

## Opciones de Autorización

- Session Cookies: son más simple, seguras, requieren la autorización del usuario en cada acción y no son buenas en performance. Estos problemas pueden solucionarse almacenando en memoria chaché a los datos de sesión del usuario
- Scopes (permisos) ejemplo: `edit:user `: Los permisos o scopes fueron diseñados para especificar lo que una aplicación puede hacer a partir de los datos del usuario. Brinda mayor performance al no tener que solicitar muchas veces comprobar un dato, se necesita JWT con los permisos (si la app es simple esto puede funcionar bien, pero si hay muchos permisos el JWT incrementará mucho su tamaño especialmente en escenarios complejos como un 'ecommerce').
- roles: ejemplo: admin. Es un grupo de usuarios con permisos, tu garantizas diferentes permisos para cada rol. Son simples, escalables, son mejores que los scopes porque no harán JWTs inmensos (los roles encapsularan los permisos), son más rápidos y mantenibles con el tiempo.

Usa scopes cuando interactues con 3ras partes, utiliza roles cuando tu manejarás manualmente los permisos con tu app.

## Silent authentication

Para evitar almacenar los datos en localStorage o cookies es posible almacenarlos en memoria.
Pero si el usuario cambia a otra pestaña tendrá que volver a logearse porque pierde los tokens.
Para evitar que esto ocurra se usa silent authentication, esto lo que hará es mantener un iframe oculto de Auth0 a la espera. Si el usuario usa otro tab o ventana, los tokens se recibirán ahí y podrá seguir navegando sin necesidad de logearse de nuevo. Por defecto funciona bien con las cuentas usuario-contraseña, para las cuentas sociales se deberá entrar a Auth0 y agregar los datos que necesite cada proveedor.
