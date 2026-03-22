/**
 * NodeJS funciona como un LIFO (last input, first output)
 * 
 * Resultado
 * -mostrar numeros
 * -dos
 * -uno
 * 
 * Esto es así porque el setTimeOut saltea la ejecución de uno
 * 
 */

const { rejects } = require("assert")

const uno = ()=> console.log('uno')
const dos = ()=> console.log('dos')

const numeros= ()=>{
    console.log("mostrar numeros")
    new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(uno())},1000);

    }).then(()=>{dos()})
}

numeros()

