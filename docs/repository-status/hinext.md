# hinext

## Estado actual

**Estado estimado:** template con evolución parcial.

Es un proyecto Next.js con TypeScript. Arrancó como starter y después tuvo varias pruebas de routing, AMP y estructura App Router.

## Evidencia encontrada

- `package.json`
  - scripts: `dev`, `build`, `start`, `lint`
  - dependencias: `next`, `react`, `react-dom`
- `next.config.js`
- `tsconfig.json`
- `src/app/`
  - `page.tsx`
  - `layout.tsx`
  - rutas: `about/`, `amphyb/`, `ampweb/`, `episodes/`, `external/`
- `log.md`
  - documenta evolución histórica del proyecto
  - menciona migraciones y actualización de dependencias
- `.next/`
  - sugiere que fue ejecutado recientemente o al menos compilado alguna vez

## Lectura arquitectónica

- Ya no es sólo el template pelado.
- Tiene señales de **exploración real de features de Next**.
- Igual, la home actual (`src/app/page.tsx`) sigue siendo muy simple.

## Qué le falta para verse más cerrado

- README propio explicando objetivo actual.
- limpiar features viejas si ya no aplican.
- documentar qué rutas siguen vigentes y cuáles son experimentos.

## Conclusión

Proyecto de exploración de Next.js que sí tuvo continuidad. Lo pondría en categoría **sandbox activo/intermedio**.
