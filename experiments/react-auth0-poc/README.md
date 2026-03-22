# react-auth0-poc

## Objetivo
Validar un flujo de autenticación/autorización con React + Auth0 + una API Express protegida con JWT, scopes y roles.

## Pregunta que responde
¿Se puede montar una PoC full-stack simple donde una SPA en React autentique con Auth0 y consuma endpoints protegidos por JWT en una API Express?

## Tipo
- full-stack
- security
- integración

## Stack
- React
- React Router
- Auth0 (`auth0-js`)
- Express
- `express-jwt`
- `express-jwt-authz`
- `jwks-rsa`

## Cómo correrlo
1. instalar dependencias:

```bash
npm install
```

2. configurar variables de entorno necesarias para Auth0 en cliente y API, por ejemplo:
- `REACT_APP_AUTH0_DOMAIN`
- `REACT_APP_AUTH0_CLIENT_ID`
- `REACT_APP_AUTH0_CALLBACK_URL`
- `REACT_APP_AUTH0_AUDIENCE`
- `REACT_APP_AUTH0_DOMAIN_HTTPS`
- `REACT_APP_JWKS`

3. arrancar la PoC:

```bash
npm start
```

## Qué prueba esta PoC
- login con Auth0 desde SPA
- recepción y manejo de tokens en cliente
- validación de JWT en API Express
- protección por scopes (`/courses`)
- protección por roles (`/admin`)
- endpoints públicos y privados en la misma PoC

## Endpoints de la API
- `GET /public`
- `GET /private`
- `GET /courses`
- `GET /admin`

## Criterio de éxito
- el cliente inicia login con Auth0
- el callback procesa `id_token` y `access_token`
- la API valida JWT correctamente usando JWKS
- los endpoints privados responden según autenticación, scope y rol

## Resultado actual
- PoC con bastante lógica implementada tanto en cliente como en API
- buena base para experimentar auth en SPA + backend
- depende de configuración externa de Auth0 para ser usable de punta a punta

## Limitaciones actuales
- no se encontró archivo `.env` en el proyecto
- `package.json` usa `run-p` en el script `start`, pero esa dependencia no está declarada explícitamente en `package.json`
- parte del conocimiento conceptual previo quedó mezclado en la historia del proyecto y no sólo en la PoC operativa

## Notas de implementación
- `src/Auth/Auth.js` maneja login, callback, sesión, scopes y renovación de token
- `server.js` protege endpoints con JWT, scopes y roles
- el experimento está orientado a Auth0 clásico con `auth0-js`

## Próximos pasos
- agregar `.env.example`
- corregir o declarar explícitamente la dependencia para `run-p`
- documentar setup de Auth0 paso a paso
- dejar una conclusión concreta sobre si esta estrategia sigue siendo válida o conviene modernizarla
