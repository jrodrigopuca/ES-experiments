# security

## Estado actual

**Estado estimado:** laboratorio dividido en subproyectos.

La carpeta agrupa material de seguridad con dos líneas claras: ejemplos Node.js y una demo React + Auth0.

## Estructura detectada

- `security-node/`
- `security-react/`

## `security-node/`

**Estado estimado:** apuntes + scripts demostrativos.

### Evidencia

- `package.json`
  - scripts `s01` a `s05`
- archivos:
  - `01-algoritmos.js`
  - `02-encriptarData.js`
  - `03-asincronico.js`
  - `04-hmac.js`
  - `05-dobleF.js`
  - `06-cookie.js`
- `readme.md`
  - explica criptografía, hashing, HMAC, TOTP y buenas prácticas

### Lectura

- Muy claramente carpeta educativa.
- Tiene valor como demo conceptual de seguridad aplicada en Node.

## `security-react/`

**Estado estimado:** documentación + demo React/Auth0 parcialmente armada.

### Evidencia

- `README.md`
  - bastante completo en conceptos de OAuth, OIDC, JWT, roles, reglas y silent auth
- subproyecto `react-auth0/`
  - `package.json`
  - `server.js`
  - `src/` con varias pantallas y utilidades de auth
  - `README.md` técnico y detallado

### Lectura

- Es el subproyecto más “aplicación” dentro de `security/`.
- La API Express valida JWT, scopes y roles.
- El README raíz del repo menciona pendiente de encontrar `.env` y revisar funcionamiento, así que seguramente está **casi usable pero no completamente listo**.

## Conclusión

`security/` está bastante bien como área temática. No es una sola app, sino un **bloque de estudio práctico sobre seguridad, autenticación y autorización**.
