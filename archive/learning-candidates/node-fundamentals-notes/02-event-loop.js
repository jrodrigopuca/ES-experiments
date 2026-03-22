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

const uno = ()=> console.log('uno')
const dos = ()=> console.log('dos')

const numeros= ()=>{
    console.log("mostrar numeros")
    setTimeout(uno,0)
    dos()
}

numeros()

