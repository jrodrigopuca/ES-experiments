/**
 * 
 * idea:
 * hazAlgo(entradas, manejarResultados)
 * 
 * ejemplo
 * var conexion=traerConexion(cadenaConexion)
 * var consulta=conexion.consultar()
 * ...
 * 
 * traerConexion(cadenaConexion, function(err,consulta){
 *      consulta.consultar(function(err, res){
 *          ...       
 *      })    
 *  })
 */

/*function sumar(n1,n2){
    return (function f(a){console.log(a)});
}

division(num1,num2,function (err,resultado){
    err=(num2==0);
    resultado=err?

})

console.log("ho")*/

/**
 * si la entrada es par, doblar
 * si la entrada es impara, error
 * 
 */

let tiempoMax=1000;


const trabajarResultado = (err, resultado)=>{
    console.log(err?`error`:`resultado ${resultado}`)
}

const esPar = (v, callback)=>{
    callback(v%2!=0,v*2)
}


for (let i = 0; i < 10; i++) {
    console.log(`valor ${i}`)
    esPar(i,trabajarResultado)
}


