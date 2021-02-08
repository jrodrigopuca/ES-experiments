/**
 * 
 * @description: Crear un callback luego de ejecutado un resultado
 * hazAlgo(entradas, manejarResultados)
 * --------------------------------
 * @example: con conexion
 * var conexion=traerConexion(cadenaConexion)
 * var consulta=conexion.consultar()
 * ...
 * 
 * traerConexion(cadenaConexion, function(err,consulta){
 *      consulta.consultar(function(err, res){
 *          ...       
 *      })    
 *  })
 * --------------------------------
 * @example: práctico 
 * 
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

/**
 * resultado
 * - valor 0  resultado 0
 * - valor 1 error
 * - valor 2 resultado 4
 * - valor 3 error
 * - valor 4 resultado 8
 * - valor 5 error
 * - valor 6 resultado 12
 * - valor 7 error
 * - valor 8 resultado 16
 * - valor 9 error
 */

