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

2. copiar el archivo de ejemplo y completar valores reales:

```bash
cp .env.example .env
```

3. configurar Auth0:
- crear una aplicación SPA
- crear o identificar un API con audience propia
- definir callback URL: `http://localhost:3000/callback`
- definir logout URL / return URL: `http://localhost:3000`
- si querés probar `/admin`, emitir también el rol `admin` en el token

4. arrancar cliente + API:

```bash
npm start
```

### Puertos esperados
- frontend CRA: `http://localhost:3000`
- API Express: `http://localhost:3001`

## Variables de entorno

### Frontend
- `REACT_APP_AUTH0_DOMAIN`
- `REACT_APP_AUTH0_CLIENT_ID`
- `REACT_APP_AUTH0_CALLBACK_URL`
- `REACT_APP_AUTH0_AUDIENCE`

### Backend
- `AUTH0_ISSUER`
- `AUTH0_AUDIENCE`
- `AUTH0_JWKS_URI`

### Compatibilidad con convención vieja
El backend mantiene fallback a:
- `REACT_APP_AUTH0_DOMAIN_HTTPS`
- `REACT_APP_JWKS`

para no romper setups previos del proyecto.

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
- funcional, pero todavía con algunas decisiones de normalización pendientes

## Limitaciones actuales
- el proyecto sigue usando un enfoque clásico con `auth0-js`
- la autorización de `/admin` está reforzada en backend; frontend todavía no modela rol `admin` explícitamente
- falta una conclusión comparativa final respecto a la futura PoC JWT genérica

## Notas de implementación
- `src/Auth/Auth.js` maneja login, callback, sesión, scopes y renovación de token
- `server.js` protege endpoints con JWT, scopes y roles
- el experimento está orientado a Auth0 clásico con `auth0-js`

## Próximos pasos
- decidir si el frontend también debe modelar rol `admin`
- documentar setup mínimo del claim/rol `admin` en Auth0
- comparar esta PoC con `spa-api-jwt-auth-poc`
- dejar una conclusión concreta sobre cuándo conviene proveedor gestionado vs JWT genérica
