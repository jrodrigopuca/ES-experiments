# sequelize-mysql-poc

## Objetivo
Validar la conexión de Sequelize con MySQL y el modelado básico de una entidad `Ticket` dentro de una app Express mínima.

## Pregunta que responde
¿Se puede levantar rápidamente una base de Express + Sequelize + MySQL para experimentar con modelos y conexión local?

## Tipo
- backend
- integración

## Stack
- Node.js
- Express
- Sequelize
- MySQL

## Cómo correrlo
1. levantar una instancia local de MySQL
2. crear la base `ticketsDB`
3. revisar `config.js` y adaptar credenciales si hace falta
4. instalar dependencias y ejecutar:

```bash
npm install
npm start
```

## Qué prueba esta PoC
- conexión Sequelize hacia MySQL local
- modelo `Ticket`
- sincronización básica del modelo
- arranque de una app Express mínima

## Criterio de éxito
- la app arranca sin error de conexión
- Sequelize autentica correctamente contra MySQL
- el modelo `Ticket` puede sincronizarse

## Resultado actual
- la conexión y el modelo están planteados
- el endpoint raíz todavía no expone funcionalidad útil
- la configuración está acoplada al entorno local
- no hay contenedor ni setup reproducible para la base

## Limitaciones actuales
- credenciales hardcodeadas en `config.js`
- doble autenticación a la base: en `database/db.js` y también al arrancar `app.js`
- falta setup reproducible para MySQL

## Próximos pasos
- mover configuración a variables de entorno
- agregar Dockerfile o docker-compose para MySQL
- exponer endpoints reales para tickets
- dejar una conclusión clara sobre si Sequelize cumple o no el objetivo de la PoC
