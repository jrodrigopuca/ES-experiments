const http = require('http')
const express = require('express')
const productos = require('./rutas/productos')
const app = express()

app.use(express.json())
app.use('/productos',productos)

app.use('/', (req,res)=>{
    res.send('funcionando')
})

const server = http.createServer(app)
server.listen(3000)


