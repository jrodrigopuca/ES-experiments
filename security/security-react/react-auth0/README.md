## Auth0 con react
```
npx create-react-app react-auth0
yarn add express express-jwt express-jwt-auth jwks-rsa auth0-js auth0-lock react-router-dom
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
### Redirigir a la página de autenticación de Auth0
creo un nuevo archivo ("Auth/Auth.js"), en donde defino una clase para usar Auth0:

```
class Auth {
    constructor(history){
        this.history= history;
        this.auth0= new auth0.WebAuth({... })
    }

    login = () =>{ this.auth0.authorize();}
}
```
Notar que:
- this.auth0: es una instancia para usar Auth0 con Auth0-js 
- login, será la función que permita la redirección a la página de Auth0

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

|                                 | LocalStorage | SessionStorage | Cookie          | En memoria       |
|---------------------------------|--------------|----------------|-----------------|------------------|
| Persiste con navegador cerrado  |    Y         |                |   Opcional      | (vía Silent Auth)|
| Persiste con pestaña cerrada    |    Y         |                |   Y             | (vía Silent Auth)|
| Persiste entre pestañas         |    Y         |                |   Y             | (vía Silent Auth)|
| Acceso a sub-dominios           |              |                |   Y             |                  |
| Enviado en c/solicitud (request)|              |                |   Y             |                  |
| Tamaño máximo                   |    2-10MB    |     5-10MB     |   4K/dominio    | Sin límite       |
| vulnerable XSRF                 |              |                |   Y             |                  |
| vulnerable XSS                  |    Y         |     Y          |   Y             | Y                |

Notar que: 
- Cookies son vulnerables en XSRF, lo que significa que los atacantes pueden hacer que el navegador del usuario pueda realizar acciones no solicitadas mientras el usuario está logeado.
- Las cookies requiere que en todas los request sean enviados nuevamente gastando ancho de banda.
- Las cookies son recomendadas si tu aplicación tiene un servidor dedicado con 'secure flag' o 'httpOnly' 

### XSS
- el atacante inyecta código en el lado del cliente
- Riesgo: perder el control del contenido del usuario

### No almacenar tokens en Local Storage
El almacenamiento local (o por sesión) en el navegador no es seguro. Cualquier dato que sea almacenado en ese lugar puede ser vulnerado por XSS. Si un atacante obtiene un token, ellos pueden tener acceso y hacer pedidos a tu API. 

Si tu app tiene backend entonces debería implementarse el mismo usando la implementación de Auth0 para ese backend(NodeJS, Python, Java, .Net)

Para SPA es mejor almacenarlo en memoria sin persistencia, se debería pedir nuevos tokens al cargar la página. Para llamar al API deberías usar una copia en memoria del token. Si el usuario cambia de pestaña o la cierra no necesariamente pierde su token, se puede usar 'silent auth' para evitar este problema.


