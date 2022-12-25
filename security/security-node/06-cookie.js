'use strict';
const app = require('express')();
const fs = require('fs')

const page = fs.readFileSync("./files/page.html").toString();

// guarda un dato en cookie
app.get('/', (req, res)=>{
  res.setHeader('Set-Cookie', ['server-name=myServer', 'data=data01; expires=2023-02-01']);
  res.setHeader('Content-type','text/html')
  res.end(page)
})

/**
 *  Va a mostrar:
 *  - host
 * -  conexión (si se mantiene activa)
 * - 'sec-ch-ua': datos del navegador
 * - 'user-agent': datos de los navegadores
 * - 'accept-language': idiomas 
 * - cookie: 
 */

app.get('/print', (req, res)=>{
  console.log(req.headers)
  res.end('ok')
})

app.listen(3000)

/**
 * En el navegador
 * Para ver cookies
 * - document.cookie
 * 
 * Más info:
 * https://www.tutorialrepublic.com/javascript-tutorial/javascript-cookies.php#:~:text=cookie%20%3D%20%22firstName%3DChristopher%3B,document.
 */
