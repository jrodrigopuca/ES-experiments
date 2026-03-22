# Plan de actualización de `react-auth0-poc`

## 1. Objetivo de la actualización

Reestructurar `react-auth0-poc` para que siga siendo una PoC clara de **Auth0 como proveedor gestionado** en una arquitectura **SPA + API**, pero con una base más mantenible, más entendible y mejor separada entre frontend y backend.

La intención no es cambiar el objetivo de la PoC, sino mejorar su organización y su capacidad de ser ejecutada, entendida y comparada con otras PoCs del repositorio.

---

## 2. Objetivo funcional de la PoC

Esta PoC existe para validar:

- autenticación con Auth0
- autorización por scopes
- autorización por roles
- consumo de API protegida desde una SPA React

Pregunta principal que responde:

> ¿Cómo integrar un proveedor gestionado de identidad como Auth0 en una SPA React y una API Express, manteniendo login, validación de JWT, scopes y roles?

---

## 3. Problemas actuales

Hoy el proyecto tiene varios problemas de organización y mantenimiento:

- frontend y backend están mezclados en una sola estructura
- dependencias de cliente y servidor conviven en el mismo `package.json`
- variables de entorno de frontend y backend están mezcladas
- el script de arranque conjunto está poco claro
- la estructura del frontend no separa bien páginas, auth, componentes y acceso a API
- el backend no tiene una estructura clara de respuestas, errores y datos mock
- hay partes del proyecto con estilo viejo de CRA / React Router clásico

Nada de esto invalida la PoC, pero sí hace más difícil mantenerla y evolucionarla.

---

## 4. Alcance de esta actualización

## Incluye

- separar el proyecto en `frontend/` y `backend/`
- separar dependencias por contexto
- dejar una forma clara de arranque conjunto y por separado
- reorganizar el frontend para que sea más legible
- reorganizar el backend para separar mejor rutas, middlewares y datos mock
- mejorar la claridad del manejo de roles y scopes
- modernizar el código donde aporte valor a la PoC

## No incluye, al menos en una primera etapa

- transformar esta PoC en una solución JWT genérica
- reemplazar Auth0 por otro proveedor
- convertirla en una app de producción
- endurecimiento completo de seguridad de nivel productivo
- agregar persistencia real si no es necesaria para el objetivo experimental

---

## 5. Arquitectura objetivo

La PoC debería quedar dividida en dos partes:

```text
react-auth0-poc/
  frontend/
  backend/
  scripts/
```

## Responsabilidades

### `frontend/`
- SPA React
- login/logout/callback con Auth0
- navegación
- consumo de endpoints protegidos
- reflejo visual de permisos y restricciones

### `backend/`
- API Express
- validación de JWT
- validación de scopes
- validación de roles
- respuestas públicas y privadas

### `scripts/`
- scripts auxiliares para levantar todo junto si hace falta

---

## 6. Estrategia de ejecución

La PoC debería poder levantarse de dos maneras:

### A. Ejecución completa
Levantar frontend y backend en conjunto para probar el flujo end-to-end.

### B. Ejecución por separado
Cada parte debería poder levantarse individualmente desde su propio `npm run start`.

Esto implica que:

- frontend tendrá sus dependencias propias
- backend tendrá sus dependencias propias
- el arranque conjunto será un agregado, no el único camino posible

---

## 7. Lineamientos para frontend

## Roles funcionales a modelar

- `admin`: usuario con acceso total a recursos administrativos
- `user`: usuario autenticado con permisos limitados
- `banned`: usuario autenticado pero bloqueado funcionalmente

## Páginas objetivo

- `Login`
- `Courses`
- `Profile`
- `Private`
- `Panel` (reemplaza el concepto anterior de `Admin` como pantalla)

> Nota: `admin` debe seguir siendo el **rol**, mientras que `Panel` debe representar la **pantalla o recurso**.

## Cambios esperados en frontend

- reorganizar páginas, componentes internos y utilidades
- centralizar llamadas HTTP en una capa `api/`
- evitar `fetch` repetido dentro de cada pantalla cuando la lógica sea reusable
- encapsular headers y manejo de token
- mejorar manejo de errores
- modernizar el código sin perder foco en el objetivo de la PoC

## Aclaración importante

El frontend puede reflejar restricciones de acceso, pero la autorización real debe seguir validándose en backend.

---

## 8. Lineamientos para backend

El backend debería reordenarse para que sea más claro como PoC de autorización.

## Cambios esperados en backend

- separar rutas, middlewares y datos mock
- mover resultados hardcodeados a una carpeta dedicada (`mocks/`, `data/` o similar)
- definir una estructura más consistente para respuestas exitosas
- definir una estructura más consistente para respuestas de error
- aislar la validación de JWT, scopes y roles de la lógica de endpoints

## Responsabilidad del backend

La seguridad real de la PoC vive acá. Por eso debe quedar claro:

- qué endpoint es público
- cuál requiere autenticación
- cuál requiere scopes
- cuál requiere roles

---

## 9. Variables de entorno y configuración

La actualización debe separar mejor la configuración entre frontend y backend.

## Objetivo

- frontend con variables propias de cliente
- backend con variables propias de servidor
- eliminar ambigüedad entre configuraciones compartidas

## Resultado esperado

- setup más entendible
- menos acoplamiento accidental
- README más fácil de seguir

---

## 10. Modernización tecnológica

La modernización es deseable, pero no debe tapar el objetivo principal de la PoC.

## Principio

No modernizar por modernizar.

Se debería actualizar tecnología sólo si mejora:

- claridad
- mantenibilidad
- compatibilidad
- capacidad de comparación con otras PoCs del repo

## Línea general propuesta

- backend: usar una base actual y estable de Node + Express
- frontend: migrar a Vite y una versión moderna de React
- actualizar dependencias relevantes

## Advertencia

Conviene separar **reestructuración** de **modernización** en fases distintas. Si se mezclan demasiados cambios al mismo tiempo, después es difícil saber qué rompió qué.

---

## 11. Fases sugeridas

## Fase 1 — Reestructuración

- separar `frontend/` y `backend/`
- separar dependencias
- ordenar variables de entorno
- mejorar estructura interna
- clarificar scripts de arranque

## Fase 2 — Normalización funcional

- ordenar roles y scopes
- renombrar `Admin` a `Panel` como pantalla
- centralizar llamadas HTTP
- mejorar respuestas y errores del backend

## Fase 3 — Modernización

- migrar frontend a Vite
- actualizar React
- revisar compatibilidad con Auth0
- actualizar dependencias restantes

## Fase 4 — Cierre de PoC

- revisar DX final
- documentar conclusiones
- comparar esta PoC con `spa-api-jwt-auth-poc`

---

## 12. Criterio de éxito de la actualización

La actualización se considerará exitosa si:

- frontend y backend pueden correr por separado
- existe una forma clara de levantar ambos juntos
- las dependencias quedan separadas correctamente
- las variables de entorno quedan mejor organizadas
- login con Auth0 sigue funcionando
- la API sigue validando JWT, scopes y roles
- `admin` como rol y `Panel` como pantalla quedan modelados de forma consistente
- la estructura del proyecto es más clara que la actual

---

## 13. Decisión arquitectónica importante

Esta PoC **debe seguir siendo específica de Auth0**.

No conviene convertirla en una PoC JWT genérica, porque eso cambiaría su objetivo original.

La comparación con una solución más genérica se resolverá en otra carpeta del repo:

- `spa-api-jwt-auth-poc`

Así cada PoC mantiene una pregunta distinta y comparable.

---

## 14. Resultado esperado final

Al terminar esta actualización, `react-auth0-poc` debería quedar como:

- una PoC de proveedor gestionado bien delimitada
- más clara para levantar y entender
- más mantenible a nivel estructura
- preparada para compararse con la PoC JWT genérica del repositorio
