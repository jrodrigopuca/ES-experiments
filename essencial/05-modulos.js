/**
 * 
 * node 05-modulos.js
 * 
 * Modulos
 * Hay tres tipos de fuentes:
 * - los internos (built-in): vienen con NodeJS, solo requieren un require para acceder a ellos
 * - archivos del proyecto: cada js puede ser un módulo, deberán llamarse según su ubicación
 * - NPM: usando módulos de terceros vía NPM
 * 
 * Objetivo del script:
 * - traer lo realizado en el archivo pares
 * - usar el la función esPar con su callback
 * - usar la variable numero
 */

const pares = require('./auxiliar/pares')

pares.esPar(15, (error,resultado)=>{
    console.log(error?"es impar":"es par");
})

console.log('traer otro valor par', pares.numero);