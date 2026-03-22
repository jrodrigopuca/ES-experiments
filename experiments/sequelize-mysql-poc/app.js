const express = require('express');
const app= express();
const sequelize = require('./database/db')
const Ticket = require('./database/models/Ticket')

const PORT = process.env.PORT || 3000;

app.get('/', function(req,res){
    //res.send('Hola')
    // Ticket.create({
    //     titulo:"hola",
    //     descripcion:"test"
    // }).then(user=>{
    //     res.json(user);
    // })
})



app.listen(PORT, ()=>{
    console.log(`iniciado en puerto ${PORT}`)

    //se conecta a la db
    sequelize.authenticate()
        .then(()=>{console.log("Conectado")})
        .catch(error=>{console.error(`Hubo error:`, error)});
})