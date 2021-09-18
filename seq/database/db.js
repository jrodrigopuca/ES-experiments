const {Sequelize} = require('sequelize')
const {dbConfig} = require('../config')

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password,{host: dbConfig.host, dialect:'mysql'})

sequelize.authenticate()
    .then(()=>{console.log('Conexión con DB establecida')})
    .catch((err)=>{console.error('Conexión perdida ', err)})

module.exports = sequelize;
