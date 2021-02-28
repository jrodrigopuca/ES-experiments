/**
 * 
 * Usar un paquete de NPM
 * 
 * pasos realizados:
 * - yarn init 
 * - yarn add request
 * - node 06-npm-module.js
 * 
 * otra forma
 * - npm init
 * - npm install request
 * - node 06-npm-module.js
 * 
 * Objetivo:
 * traer el contenido de google.com
 */
const request = require('request');

request('http://google.com', (error,res,body)=>{
    if (!error && res.statusCode===200){
        console.log(body);
    }
})