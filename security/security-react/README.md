
# Prioridades
- Autenticación: Responde a la pregunta (¿Quién eres?). Por ejemplo cuando alguien hace login con email+password. Se puede utilizar OpenID Connect (OIDC) con token para identificar la identidad (Identity token). Este último puede ser un JWT.
- Autorización: Responde a la pregunta (¿qué tienes permitido hacer?). Por ejemplo cuando el usuario tiene acceso a algo como modificar un dato. Se puede utilizar OAuth 2.0 con un token para identificar el acceso (Access token). Este último puede ser un JWO o una cadena de caracteres.


## Proveedores
### Motivos para usarlos:
- La seguridad es compleja y es fácil equivocarse. Al elegir un proveedor nos aseguramos que un especialista se está encargando de eso.
- Es posible personalizar los proveedores a lo que necesites integrar con tu aplicación.
- Es gratis para muchas aplicaciones, el precio cambia entre proveedores pero la mayoría tiene opciones gratuitas.

### Proveedores más populares
- Auth0: Es el proveedor más usado, con mayor documentación, ofrece librerías que han sido muy probadas en múltiples aplicaciones. Tiene su servicio de autorización llamado OAuth 2.0
- okta

## Pasos para usar Auth0
- Registrar con un proovedor de servicio (google, msft, etc) al nombre de la app/sitio web
- Definir los roles que necesitamos: 
    - Resources Owner (propietario de la cuenta)
    - Cliente: Es el accederá a la app con una cuenta 
    - Auth Server (auth0): el cual hará la lógica de autenticación
    - Resource Server: tendrá protegida la información, usará una API para el acceso.
- Definir el flujo de datos
    - App envía una solicitud de autorización (Auth Request)
    - Usuario acepta la solicitud y envía garantía (Auth Grant)
    - App envía al Auth Server la garantía
    - El Auth Server devuelve un token a la App (Access Token)
    - App envia el token al Resource Server para acceder a los datos (Token ID)
    - Si el token es válido el Resource Server devuelve datos a la app (Data)
    Este flujo de datos dependerá de los permisos y los roles que se definan.
- Definir grant (flow) : formas de recibir un token, describe un flujo de datos para usar con Auth0. Se puede usar grants para diferentes aplicaciones, así Auth0 tiene definido que pasos seguir de acuerdo al tipo de app.  
https://auth0.com/docs/api-auth/which-oauth-flow-to-use
- Implicit Flow: Una forma simplificada de flujo de datos
    - La app dirige al browser al sign-in de Auth0
    - Auth0 redirige a la app en una URL especifica
    - La app lee los tokens desde la URL    

## OpenID Connect 
OAuth es para autorización, no interviene en solicitudes de información del usuario. Con OpenID es posible:
- Autenticar usuario sin manejar contraseñas
- Brinda tres tokens:
    - ID Token o JSON Web Tokens (JWT): un id provisto por un proveedor de identidad (MSFT, google, etc)
    - UserInfo endpoint
    - Standard scopes: permisos

## JSON Web Tokens (JWT)
- es un token de acceso
- usado para autorización e intercambio de información
- frecuentemente usado para información del usuario
- es pronunciado "JOT" (yot)
- es firmado digitalmente, tu puedes confiar en ese dato porque fue enviado por un proveedor seguro y no fue modificado. 
- El contenido puede ser encriptado para mejorar la seguridad. Recomendación: No poner el 'secret' en el payload (datos a enviar) o en el encabezado de elementos sin JWT 
- Es mejor que SAML (una alternativa que usa XML)
    - Utiliza JSON que es mejor para el intercambio
    - Es más pequeño incluso al codificarse
    - Es más fácil de registrarse
    - Es más fácil para interactuar con el cliente de la aplicación

### Partes del JWT
```
ejemplo decodificado:
// Header: tiene el tipo, el algoritmo hash y el Key ID
{"typ":"JWT", "alg":"RS256", "kid":"NUY.."}

// Body: Identidad del usuario y la fecha
{"sub":"12345", "name":"John", "iat": 1512232344}

// Signature o Firma: Verifica al emisor, asegura que el contenido es legítimo
HMACSHA256(
    base64UrlEncode(header)+"."+base64UrlEncode(payload), your-secret)
)

ejemplo codificado:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

## IDToken vs AccessToken
IDToken: contiene un variedad de datos que el usuario quiere ver
```
{
    "iss": "http://myhouse.auth0.com",
    "sub":"auth0|123456",
    "aud": "E5887978ab9878A8787989",
    "exp": 12121212,
    "iat": 12121212,
    "name": "My House",
    "given_name": "My",
    "family_name": "House",
    "birthdate": "0000-10-31",
    "email":"c@myhouse.com",
    "picture": "house.jpg"
}

```

Access Token: Se enfoca en los scopes (o permisos). El único dato del usuario son los permisos, en este caso es acceder a la información básica de perfil y leer los datos de los productos
```
{
    "iss":"http://myhouse.auth0.com",
    "sub": "auth0|123456",
    "aud":["my-api-identifier","http://myhouse.auth0.com/userinfo"],
    "azp":"E5887978ab9878A8787989"
    "exp": 14897876867,
    "iat": 14897876867,
    "scope": "openid profile read:products"
}
```

## Flujo de datos
1) Iniciar sesión y recibir el JWT Identity Token (OIDC)
2) Autorizar a la app y recibir el Access Token(OAuth 2.0)
3) Incluir el access token en llamadas a la API

Recordar:
- Usar ID Tokens para autenticación
- Usar Access Token para acceder al API
 para autenticación
 - Usar Access Token para acceder al API

## Tipos de OAuth Grants (o flujos de datos)
- Código de autorización: Para aplicaciones del lado del servidor
- Implicitas: Aplicaciones web del lado del cliente
- credenciales o passwords del propietario: aplicaciones propias
- credenciales: acceso al API

