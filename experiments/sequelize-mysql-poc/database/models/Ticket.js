const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db');

class Ticket extends Model{

    static getAll(){
        return this.findAll({raw:true});
    }
}

Ticket.init({
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    titulo: {type:DataTypes.STRING, allowNull:false},
    descripcion: {type:DataTypes.STRING},
    modificado: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
},{
    sequelize,
    timestamps: false,
    modelName:'Ticket',
    tableName:'Tickets'
})

Ticket.sync();

module.exports = Ticket;