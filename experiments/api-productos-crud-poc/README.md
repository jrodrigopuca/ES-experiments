# api-productos-crud-poc

## Objetivo
Validar una API REST mínima con Express para exponer un CRUD de productos usando datos mockeados en memoria.

## Pregunta que responde
¿La estructura básica de Express con rutas separadas alcanza para levantar rápidamente un CRUD demo sin persistencia?

## Tipo
- backend

## Stack
- Node.js
- Express

## Cómo correrlo
```bash
npm install
npm start
```

Servidor esperado en `http://localhost:3000`.

## Qué prueba esta PoC
- montaje de servidor HTTP + Express
- uso de `express.Router()`
- endpoints CRUD básicos sobre un array en memoria
- serialización JSON

## Endpoints principales
- `GET /` → health check simple
- `GET /productos`
- `GET /productos/:id`
- `POST /productos`
- `PUT /productos/:id`
- `DELETE /productos/:id`

## Criterio de éxito
- el servidor levanta en puerto 3000
- se puede listar productos mock
- se puede consultar un producto por id
- se puede crear, actualizar y eliminar en memoria

## Resultado actual
- funcional como demo mínima
- sin persistencia real
- sin validación de payloads
- sin tests

## Próximos pasos
- agregar ejemplos de request/response
- incorporar validación de entrada
- mejorar manejo de errores HTTP
- definir si queda como demo simple o si evoluciona a PoC con persistencia
