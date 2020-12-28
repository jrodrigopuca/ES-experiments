const http = require('http')
const express = require('express')
const app = express()

app.use(express.json())

app.use('/', (req,res)=>{
    res.send('funcionando')
})

const server = http.createServer(app)
server.listen(3000)


