# Estado del repositorio

Levantamiento rápido del repositorio `ES-experiments` al 2026-03-21.

## Cómo leer este relevamiento

- **Activo / funcional**: hay estructura clara, archivos principales y parece ejecutable.
- **Template / base**: proyecto generado desde un starter, con pocos cambios propios.
- **Incompleto / borrador**: hay intención clara pero faltan piezas importantes.
- **Apuntes / laboratorio**: material de estudio o pruebas, no necesariamente producto final.

> Nota: este estado está inferido por estructura, `package.json`, README y archivos clave. No se ejecutó build ni tests.

## Resumen por carpeta

| Carpeta | Tipo | Estado estimado | Documento |
| --- | --- | --- | --- |
| `api-productos/` | API Node + Express | Funcional mínima | [api-productos.md](./api-productos.md) |
| `essencial/` | Ejemplos Node.js | Apuntes/laboratorio | [essencial.md](./essencial.md) |
| `hiMalina-f/` | Base vacía | Incompleto | [hiMalina-f.md](./hiMalina-f.md) |
| `hiMalina/` | App Malina.js | Template modificado | [hiMalina.md](./hiMalina.md) |
| `hinext/` | App Next.js | Template con algo de evolución | [hinext.md](./hinext.md) |
| `hiVue/` | App Vue 3 + Vite | Template con personalización inicial | [hiVue.md](./hiVue.md) |
| `react-course/` | Curso y ejercicios React / RN | Material mixto, bastante útil | [react-course.md](./react-course.md) |
| `security/` | Apuntes + demos de seguridad | Laboratorio dividido en 2 subproyectos | [security.md](./security.md) |
| `seq/` | Express + Sequelize + MySQL | Prototipo parcial | [seq.md](./seq.md) |

## Lectura general del repo

- El repo funciona como **contenedor de experimentos** más que como monorepo integrado.
- Hay varios proyectos con `node_modules/`, o sea que varios fueron instalados y usados en algún momento.
- La mayoría de las carpetas son **independientes entre sí**.
- Los proyectos más “producto” o demo ejecutable parecen ser:
  - `api-productos/`
  - `hinext/`
  - `hiVue/`
  - `security/security-react/react-auth0/`
  - `react-course/Contacts/`
  - `react-course/project1/`
- Los más claramente “apunte/estudio” parecen ser:
  - `essencial/`
  - `react-course/` raíz
  - `security/security-node/`
  - `seq/apuntes.md`

## Señales de deuda o seguimiento pendiente

- El `README.md` raíz ya marca pendientes en:
  - `seq/`: crear Dockerfile para MySQL.
  - `security-react/`: encontrar `.env` y revisar funcionamiento.
- `hiMalina-f/` está prácticamente vacío.
- `seq/` tiene configuración local hardcodeada para MySQL y da sensación de ejemplo todavía no cerrado.
