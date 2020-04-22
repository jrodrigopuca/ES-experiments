## Auth0 con react

```
npx create-react-app react-auth0
```

Estrategias usadas:
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

sus: suscriber id