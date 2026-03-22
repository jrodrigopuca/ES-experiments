# Tareas de implementación para `react-auth0-poc`

Este documento baja el plan de actualización a tareas concretas y ejecutables.

---

## Fase 1 — Reestructuración

Objetivo: separar responsabilidades y dejar una base clara para seguir trabajando.

### Estructura
- [ ] crear carpeta `frontend/`
- [ ] mover código de SPA React a `frontend/`
- [ ] crear carpeta `backend/`
- [ ] mover código de API Express a `backend/`
- [ ] crear carpeta `scripts/` si realmente hace falta para arranque conjunto
- [ ] revisar qué archivos deben quedar en la raíz de la PoC y cuáles no

### Dependencias
- [ ] crear `package.json` propio para `frontend/`
- [ ] mover dependencias de React/Auth0 al `package.json` de frontend
- [ ] crear `package.json` propio para `backend/`
- [ ] mover dependencias de Express/JWT al `package.json` de backend
- [ ] eliminar dependencias cruzadas innecesarias

### Scripts
- [ ] definir `npm run start` para frontend
- [ ] definir `npm run start` para backend
- [ ] definir estrategia de arranque conjunto
- [ ] decidir si el arranque conjunto vive en root o en `scripts/`

### Variables de entorno
- [ ] separar variables de frontend y backend
- [ ] definir `.env.example` para frontend si aplica
- [ ] definir `.env.example` para backend si aplica
- [ ] eliminar ambigüedad entre variables `REACT_APP_*` y variables de servidor

### Criterio de salida de Fase 1
- [ ] frontend corre solo
- [ ] backend corre solo
- [ ] existe una forma clara de correr ambos juntos
- [ ] dependencias quedan separadas por contexto

---

## Fase 2 — Normalización funcional

Objetivo: hacer más clara la lógica de la PoC sin cambiar todavía la base tecnológica principal.

### Frontend
- [ ] reorganizar páginas en una estructura más clara
- [ ] separar componentes compartidos
- [ ] extraer lógica de auth a una zona explícita (`auth/` o similar)
- [ ] crear capa `api/` para centralizar requests
- [ ] encapsular envío de bearer token
- [ ] unificar manejo de errores de fetch/API

### Roles y pantallas
- [ ] renombrar pantalla `Admin` a `Panel`
- [ ] mantener `admin` como nombre del rol
- [ ] definir claramente qué puede hacer `admin`
- [ ] definir claramente qué puede hacer `user`
- [ ] definir claramente qué implica `banned`

### Autorización
- [ ] decidir si frontend debe modelar explícitamente el rol `admin`
- [ ] alinear comportamiento entre navegación frontend y validación backend
- [ ] documentar qué protección es UX y cuál es seguridad real

### Backend
- [ ] mover datos hardcodeados a `mocks/` o `data/`
- [ ] separar rutas de middlewares
- [ ] separar validación de JWT/scopes/roles de los handlers
- [ ] definir formato consistente de respuesta exitosa
- [ ] definir formato consistente de respuesta de error

### Criterio de salida de Fase 2
- [ ] el flujo funcional sigue andando
- [ ] la estructura del código es más clara
- [ ] roles/scopes quedan entendibles
- [ ] backend expresa mejor sus responsabilidades

---

## Fase 3 — Modernización

Objetivo: actualizar tooling y base tecnológica sólo después de ordenar la PoC.

### Frontend
- [ ] decidir si la migración a Vite realmente aporta valor a esta PoC
- [ ] migrar desde CRA si la decisión es sí
- [ ] actualizar React a una versión moderna compatible con el objetivo
- [ ] revisar compatibilidad de Auth0 con la nueva base elegida

### Backend
- [ ] actualizar Node a una versión estable objetivo
- [ ] actualizar dependencias de Express/JWT si aporta claridad o compatibilidad

### Validación
- [ ] verificar que login, callback y logout sigan funcionando
- [ ] verificar que `/private`, `/courses` y `/admin` sigan respondiendo correctamente
- [ ] verificar que la modernización no haya cambiado el objetivo experimental de la PoC

### Criterio de salida de Fase 3
- [ ] proyecto actualizado sin perder el foco Auth0
- [ ] setup sigue siendo entendible
- [ ] integración sigue funcionando

---

## Fase 4 — Cierre de PoC

Objetivo: cerrar la PoC como unidad de aprendizaje y comparación.

### Documentación final
- [ ] actualizar README final con estructura definitiva
- [ ] documentar setup real y simplificado
- [ ] documentar limitaciones reales
- [ ] documentar decisiones tomadas en la actualización

### Conclusiones
- [ ] escribir qué valor aporta usar Auth0 en este escenario
- [ ] escribir qué complejidad agrega usar Auth0 en este escenario
- [ ] dejar una comparación explícita contra `spa-api-jwt-auth-poc`

### Estado final
- [ ] marcar la PoC como funcional / parcial / descartada según resultado real

---

## Orden recomendado de ejecución

1. Fase 1 — Reestructuración
2. Fase 2 — Normalización funcional
3. Fase 3 — Modernización
4. Fase 4 — Cierre de PoC

---

## Regla importante

No mezclar demasiados cambios al mismo tiempo.

Si se cambia estructura, tooling, routing, Auth0 y API todo junto, después no se puede distinguir qué mejora aportó valor y qué cambio introdujo ruido.

La prioridad es:

1. claridad estructural
2. consistencia funcional
3. modernización
4. conclusiones
