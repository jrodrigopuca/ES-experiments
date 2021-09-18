//const sequelize = require('../database/db')
const ticket = require('../database/models/Ticket')

    // crear un nuevo elemento
    // ticket.create({
    //     titulo:"Otro",
    //     descripcion:"test"
    // }).then(user=>{
    //     console.log(user);
    // })

    // // traer elementos
    // ticket.findAll().then(tickets=>{console.log(tickets)})

    // traer elementos pero solo con formato JSON
    //ticket.findAll({raw:true}).then(tickets=>{console.log(tickets)})

    console.log(ticket.getAll());
