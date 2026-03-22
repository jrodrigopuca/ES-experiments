# Revisión de `react-auth0-poc`

Fecha: 2026-03-21

## Resultado de la revisión

**Decisión recomendada:** mantener en `experiments/`, pero **normalizar antes de seguir avanzando**.

No es candidata a archivo ni a eliminación. Sí es candidata clara a una ronda de saneamiento técnico/documental.

---

## Evaluación usando el checklist

## 1. Identidad

### ¿el nombre de la carpeta expresa la intención de la PoC?
**Sí.**

`react-auth0-poc` comunica bien que se trata de una PoC de React + Auth0.

### ¿el tipo está claro?
**Sí.**

Es una PoC **full-stack / security / integración**.

---

## 2. Objetivo

### ¿el objetivo es concreto?
**Sí.**

La PoC valida autenticación/autorización con:

- SPA React
- proveedor Auth0
- API Express
- JWT
- scopes
- roles

### ¿la pregunta que responde está bien formulada?
**Sí.**

Está bien alineada con el valor experimental de la carpeta.

### ¿el alcance está acotado?
**Más o menos.**

El objetivo general está claro, pero faltaría dejar mejor definido hasta dónde llega la PoC. Por ejemplo:

- login/logout
- callback
- endpoints públicos y privados
- scopes
- roles

Eso hoy está en el código, pero podría quedar más explícito como alcance formal.

---

## 3. Documentación

### ¿tiene README?
**Sí.**

### ¿explica cómo correrla?
**Parcialmente.**

Documenta variables necesarias, pero no deja una guía operativa completa.

### ¿explica criterio de éxito?
**Sí.**

### ¿declara resultado actual?
**Sí.**

### ¿declara próximos pasos?
**Sí.**

### Conclusión documental
La base está bien. Falta mejorar la parte de **setup reproducible**.

---

## 4. Ejecución

### ¿hay comandos claros para levantarla?
**Parcialmente.**

El README indica `npm install` y `npm start`, pero el proyecto hoy tiene una inconsistencia real en `package.json`.

### ¿los prerequisitos externos están documentados?
**Parcialmente.**

Se mencionan variables de Auth0, pero no está el paso a paso del tenant/configuración.

### ¿las variables de entorno requeridas están documentadas?
**Sí, pero incompleto operacionalmente.**

Se listan en README, pero no existe `.env.example`.

---

## 5. Consistencia técnica

## Hallazgo 1 — `package.json` no está alineado del todo con la PoC

El nombre actual del paquete es:

```json
"name": "react-auth0"
```

Mientras que la carpeta se llama `react-auth0-poc`.

### Recomendación
Normalizarlo a algo como:

```json
"name": "react-auth0-poc"
```

---

## Hallazgo 2 — script `start` usa `run-p` sin dependencia declarada

En `package.json`:

```json
"start": "run-p start:client start:server"
```

Pero `npm-run-all` no está declarado en `dependencies` ni en `devDependencies`.

### Impacto
El comando documentado para levantar la PoC puede fallar.

### Recomendación
Elegir una de estas dos:

1. agregar `npm-run-all` explícitamente
2. cambiar la estrategia de arranque y documentarla distinto

---

## Hallazgo 3 — se usa `dotenv` sin dependencia declarada explícitamente

En `server.js`:

```js
require('dotenv').config();
```

Pero `dotenv` no aparece en `package.json`.

### Impacto
El backend depende de un paquete no declarado explícitamente.

### Recomendación
Agregar `dotenv` a `package.json` o eliminar esa dependencia si se decide otra estrategia.

---

## Hallazgo 4 — no existe `.env` ni `.env.example`

Se documentan varias variables:

- `REACT_APP_AUTH0_DOMAIN`
- `REACT_APP_AUTH0_CLIENT_ID`
- `REACT_APP_AUTH0_CALLBACK_URL`
- `REACT_APP_AUTH0_AUDIENCE`
- `REACT_APP_AUTH0_DOMAIN_HTTPS`
- `REACT_APP_JWKS`

Pero no hay un archivo de ejemplo.

### Recomendación
Crear `.env.example` con placeholders y comentarios mínimos.

---

## Hallazgo 5 — convención de variables mezclada entre frontend y backend

El backend usa variables `REACT_APP_*`, por ejemplo:

- `REACT_APP_JWKS`
- `REACT_APP_AUTH0_AUDIENCE`
- `REACT_APP_AUTH0_DOMAIN_HTTPS`

Eso funciona técnicamente, pero conceptualmente está mezclando configuración de frontend con configuración de servidor.

### Recomendación
Separar convención, por ejemplo:

- frontend: `REACT_APP_*`
- backend: `AUTH0_*`

No es obligatorio para que la PoC funcione, pero sí mejora claridad.

---

## Hallazgo 6 — la PoC está muy acoplada a Auth0, pero eso es consistente con su objetivo

Esto **no es un problema** si se mantiene como PoC vendor-specific.

Sí sería problema si se intentara vender como “JWT genérica”.

La decisión ya tomada de separarla de `spa-api-jwt-auth-poc` resuelve bien esto.

---

## Hallazgo 7 — roles en frontend y backend no están alineados del todo

En frontend:

- `SecureRoute` aplica scopes para `/courses`
- `/admin` sólo requiere autenticación

En backend:

- `/admin` exige además rol `admin`

### Impacto
El usuario puede navegar a `/admin`, pero luego fallar recién al consumir la API.

### Recomendación
Decidir si el frontend también debe modelar rol `admin`, o si se acepta que la autorización fuerte viva sólo en backend.

Para una PoC, cualquiera de las dos decisiones sirve, pero debería ser explícita.

---

## Hallazgo 8 — hay detalles viejos de CRA / React Router clásico

La app usa:

- `ReactDOM.render`
- `Route component={App}`
- patrones de React Router previos

No necesariamente hay que modernizarla ya, porque eso podría cambiar el objetivo de la PoC.

### Recomendación
No tocar esto en la primera ronda salvo que rompa la ejecución. Primero normalizar setup y dependencias.

---

## Deuda visible

- falta `.env.example`
- `dotenv` no declarado explícitamente
- `run-p` sin dependencia explícita
- `package.json` no alineado al nombre de carpeta
- setup Auth0 no documentado paso a paso
- convención de env mezclada entre frontend y backend

---

## Acción recomendada

### Veredicto
**Mantener pero normalizar.**

### Orden sugerido de ajustes

1. normalizar `package.json`
   - nombre del paquete
   - dependencia para `run-p`
   - dependencia `dotenv`
2. crear `.env.example`
3. aclarar en README:
   - qué config va en frontend
   - qué config va en backend
   - pasos mínimos de setup en Auth0
4. decidir si `/admin` también debe validar rol del lado cliente

---

## Decisión final

`react-auth0-poc` **merece seguir en `experiments/`**.

Pero no está lista para considerarse PoC prolija todavía. Está en estado:

**funcional pero con saneamiento pendiente**.
