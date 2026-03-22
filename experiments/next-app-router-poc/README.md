# next-app-router-poc

## Objetivo
Validar una app Next.js moderna usando App Router y dejar una base para probar routing, páginas dinámicas y variantes de renderizado.

## Pregunta que responde
¿La estructura App Router de Next.js sirve como base para experimentar con rutas, páginas dinámicas y pruebas de navegación en un proyecto chico?

## Tipo
- frontend

## Stack
- Next.js
- React
- TypeScript

## Cómo correrlo
```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Qué prueba esta PoC
- App Router
- layout raíz
- rutas como `about`, `episodes`, `external`
- ruta dinámica en `episodes/[id]`
- páginas de exploración como `amphyb` y `ampweb`

## Criterio de éxito
- la app levanta con `next dev`
- las rutas principales renderizan
- la ruta dinámica responde con un id válido
- sirve como base para seguir comparando features de Next

## Resultado actual
- PoC activa con varias rutas ya creadas
- mezcla base de starter con exploraciones propias
- la home sigue siendo bastante mínima

## Contexto histórico
- `log.md` documenta la evolución del experimento
- hubo una migración desde una estructura más vieja de Next hacia una más nueva

## Próximos pasos
- documentar qué ruta existe para qué prueba
- aclarar qué features siguen vigentes y cuáles fueron experimentos puntuales
- agregar una conclusión concreta sobre App Router vs estructura anterior
