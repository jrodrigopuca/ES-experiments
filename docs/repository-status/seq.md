# seq

## Estado actual

**Estado estimado:** prototipo parcial.

Proyecto Node + Express + Sequelize orientado a MySQL. Tiene base suficiente para arrancar, pero todavía se lo ve en etapa de experimento.

## Evidencia encontrada

- `package.json`
  - script: `start` con `nodemon app.js`
  - dependencias: `express`, `mysql2`, `sequelize`, `nodemon`
- `app.js`
  - inicia Express
  - importa Sequelize y modelo `Ticket`
  - autentica conexión al arrancar
- `config.js`
  - credenciales locales hardcodeadas (`root`, db `ticketsDB`, `localhost`)
- `database/db.js`
  - capa de conexión Sequelize
- `database/models/Ticket.js`
  - modelo `Ticket`
  - `Ticket.sync()` al cargar
- `apuntes.md`
  - documentación extensa sobre Sequelize

## Lectura arquitectónica

- Mezcla de **proyecto prototipo** con **apunte técnico**.
- La app todavía casi no expone lógica real en endpoints.
- Está más avanzada la parte de conexión/modelado que la parte HTTP.

## Señales concretas de trabajo pendiente

- El `README.md` raíz del repo deja explícito:
  - “crear dockerfile para levantar el mysql”
- La configuración de DB está acoplada al entorno local.
- No hay README propio dentro de `seq/` explicando cómo levantarlo.

## Qué le falta para quedar más sólido

- docker-compose o Dockerfile para MySQL
- variables de entorno para conexión
- endpoints reales para tickets
- README con pasos de setup

## Conclusión

Buen punto de partida para practicar Sequelize, pero hoy lo clasificaría como **experimento incompleto con base prometedora**.
