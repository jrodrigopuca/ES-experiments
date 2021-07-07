const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db');

class Ticket extends Model{}

Ticket.init({
    titulo: {type:DataTypes.STRING, allowNull:false},
    descripcion: {type:DataTypes.STRING}
},{
    sequelize,
    modelName:'Ticket',
    tableName:'Tickets'
})

module.exports = Ticket;