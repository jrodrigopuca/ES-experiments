/**
 * @description: comenzar con http server
 * para iniciar
 * - en consola: node .\01-http.js
 * - en browser: http://localhost:1337/
 */

var http= require('http');
http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hola \n')
}).listen(1337);

console.log('Servidor listo!')