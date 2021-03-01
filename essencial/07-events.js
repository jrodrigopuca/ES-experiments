/**
 * 
 * process.nextTick: usado para hacerlo asincrónico
 * emit(): suscribiendosé a los eventos 
 * 
 * resultados:
 * - el ballet cósmico ha comenzado
 * - ya tengo la data: 1
 * - ya tengo la data: 2
 * - ya tengo la data: 3
 * - ya tengo la data: 4
 * - ya tengo la data: 5
 * - terminamos con 5
 */

const EventEmitter = require('events').EventEmitter;

const traerAlgo = function(valorMax){
    const e = new EventEmitter();
    process.nextTick(function(){
        let contador=0;
        e.emit('inicio');
        const intervalo = setInterval(() => {
            e.emit('data', ++contador)
            if (contador===valorMax) {
                e.emit('fin', contador);
                clearInterval(intervalo);
            }
        }, 1000);
    })

    return e; //devuelve el emitter para que pueda ser suscripto
}

const recurso = traerAlgo(5);

recurso.on('inicio', ()=>{
    console.log('el ballet cósmico ha comenzado')
})

recurso.on('data',(valor)=>{
    console.log(`ya tengo la data: ${valor}`)
})

recurso.on('fin', (valor)=>{console.log(`terminamos con ${valor}`)})




