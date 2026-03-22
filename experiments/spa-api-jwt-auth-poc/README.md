# spa-api-jwt-auth-poc

## Objetivo
Validar un flujo de autenticación/autorización JWT entre una SPA y una API propia, sin depender de un proveedor gestionado de identidad.

## Pregunta que responde
¿Se puede implementar una base simple y entendible de auth JWT para SPA + API manteniendo control del login, emisión de tokens, validación, expiración y autorización?

## Tipo
- full-stack
- security
- integración

## Stack propuesto
- React o frontend SPA simple
- Node.js
- Express
- JWT

## Alcance inicial
- login contra backend propio
- emisión de `access token`
- validación de JWT en endpoints protegidos
- protección por roles o permisos simples
- consumo de endpoints protegidos desde SPA

## Fuera de alcance inicial
- OAuth completo
- proveedor externo de identidad
- SSO
- refresh token complejo multi-dispositivo
- hardening de producción

## Arquitectura esperada
- **frontend SPA**: login, almacenamiento controlado del token, consumo de endpoints
- **API**: autenticación, emisión de JWT, middleware de validación, rutas públicas/privadas

## Criterio de éxito
- un usuario puede autenticarse contra la API
- la API emite un JWT válido
- la SPA consume endpoints protegidos enviando el token
- la API distingue acceso público, autenticado y autorizado

## Resultado actual
- PoC planificada
- todavía no implementada

## Valor comparativo
Esta PoC existe para compararse contra `react-auth0-poc` en:

- complejidad de setup
- acoplamiento a proveedor
- claridad del flujo
- esfuerzo de mantenimiento
- control sobre claims, roles y permisos

## Próximos pasos
- definir estructura de carpetas interna
- decidir estrategia de login mínima
- definir formato de claims
- decidir cómo modelar roles/permisos
- implementar primera versión funcional
