# api-productos

## Estado actual

**Estado estimado:** funcional mínima.

Es una API chica en Node + Express orientada a productos mockeados en memoria. Tiene estructura suficiente para correr como demo simple.

## Evidencia encontrada

- `package.json`
  - script: `npm start`
  - dependencia principal: `express`
- `server.js`
  - monta Express
  - usa JSON middleware
  - expone `/productos`
  - escucha en puerto `3000`
- `rutas/productos.js`
  - CRUD básico sobre array en memoria
  - `GET /productos`
  - `GET /productos/:id`
  - `POST /productos`
  - `PUT /productos/:id`
  - `DELETE /productos/:id`
- `mock.js`
  - sugiere generación de datos falsos

## Lectura arquitectónica

- Sirve como **ejemplo de API REST muy básica**.
- No hay persistencia real: todo vive en memoria.
- No aparece validación, tests, ni manejo de errores consistente.

## Qué le falta para considerarlo más completo

- Persistencia real o al menos archivo/db mock.
- Validación de payloads.
- Respuestas de error más consistentes.
- README propio con endpoints y ejemplos.

## Conclusión

Proyecto útil como **demo de Express CRUD**, pero todavía en nivel laboratorio.
