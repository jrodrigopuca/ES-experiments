# Estado actual de `react-auth0-poc`

Fecha de corte: 2026-03-21

## Objetivo de este documento

Guardar el estado de avance de la PoC para poder retomar en otra sesión sin perder contexto.

---

## Resumen ejecutivo

La PoC `react-auth0-poc` ya fue:

- revisada con checklist formal
- normalizada en documentación básica
- separada en `frontend/` y `backend/`
- reorganizada para usar scripts propios de arranque conjunto
- documentada como PoC específica de Auth0, separada de la futura PoC JWT genérica

Todavía **no se cerró completamente la Fase 1**, porque falta verificar ejecución real y terminar de limpiar la convención de variables entre frontend y backend.

---

## Decisiones importantes ya tomadas

### 1. Esta PoC se mantiene específica de Auth0

No se la va a reconvertir a JWT genérica.

La comparación con una solución más general se hará en:

- `experiments/spa-api-jwt-auth-poc/`

### 2. Se separan las responsabilidades en frontend y backend

La PoC ya no se organiza como una sola app mezclada.

Estructura actual:

```text
react-auth0-poc/
  frontend/
  backend/
  scripts/
```

### 3. Se abandona `npm-run-all`

El arranque conjunto ahora debe resolverse con un script explícito.

Actual:

- `scripts/start.sh`

---

## Cambios ya realizados

## Estructura

- se creó `frontend/`
- se movió la SPA React a `frontend/`
- se creó `backend/`
- se movió la API Express a `backend/src/server.js`
- se creó `scripts/`

## Dependencias

- se separó `package.json` de frontend
- se separó `package.json` de backend
- la raíz ahora tiene un `package.json` mínimo de workspace/orquestación

## Variables de entorno

- se eliminó el `.env.example` único de la raíz
- ahora existen:
  - `frontend/.env.example`
  - `backend/.env.example`

## Arranque

- `npm start` en la raíz usa `bash ./scripts/start.sh`
- existe arranque individual con:
  - `npm --prefix frontend run start`
  - `npm --prefix backend run start`

## Documentación

- `README.md` actualizado
- `ACTUALIZACION.md` reescrito como plan serio
- `TAREAS.md` creado como checklist accionable
- revisión formal guardada en `docs/reviews/react-auth0-poc-review.md`

---

## Estado de fases

## Fase 1 — Reestructuración

### Ya hecho
- separación física frontend/backend
- package separados
- env examples separados
- salida de `npm-run-all`
- script bash de arranque conjunto

### Pendiente
- verificar que frontend corre solo
- verificar que backend corre solo
- terminar de eliminar ambigüedad entre variables `REACT_APP_*` y variables de backend

### Estado
**Fase 1 en tramo final, pero no cerrada aún.**

## Fase 2 — Normalización funcional

Todavía no arrancada.

Pendientes importantes:
- reorganizar frontend
- centralizar capa API
- ordenar roles y pantallas
- ordenar backend y respuestas

## Fase 3 — Modernización

Todavía no arrancada.

## Fase 4 — Cierre de PoC

Todavía no arrancada.

---

## Riesgos o puntos sensibles actuales

### 1. Fallback viejo de variables en backend

`backend/src/server.js` todavía acepta fallback a variables viejas del estilo:

- `REACT_APP_AUTH0_AUDIENCE`
- `REACT_APP_AUTH0_DOMAIN_HTTPS`
- `REACT_APP_JWKS`

Esto ayuda a transición, pero mantiene deuda de claridad.

### 2. No se validó ejecución real todavía

La estructura quedó mejor, pero todavía no se verificó con instalación/arranque en el nuevo layout.

### 3. Hay deuda funcional pendiente

Sigue pendiente decidir:

- si frontend modela explícitamente rol `admin`
- si `Admin` se renombra a `Panel`
- cómo se organiza la capa API del frontend

---

## Próximo paso recomendado al retomar

Seguir con el cierre de **Fase 1** en este orden:

1. instalar dependencias en `frontend/` y `backend/`
2. verificar que frontend corre solo
3. verificar que backend corre solo
4. verificar que el script conjunto funciona
5. decidir si se elimina ya el fallback viejo de variables en backend

Recién después de eso pasar a **Fase 2**.

---

## Archivos clave para retomar rápido

- `experiments/react-auth0-poc/README.md`
- `experiments/react-auth0-poc/ACTUALIZACION.md`
- `experiments/react-auth0-poc/TAREAS.md`
- `experiments/react-auth0-poc/ESTADO-ACTUAL.md`
- `docs/reviews/react-auth0-poc-review.md`
- `docs/auth-pocs-strategy.md`
