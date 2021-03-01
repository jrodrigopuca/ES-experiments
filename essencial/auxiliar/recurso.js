/**
 * 
 * util.inherits(clase hijo, clase padre): crea una herencia
 */
const util =require('util');
const EventEmitter= require('events').EventEmitter;

function Recurso (maximo){
    let evento=this;
    process.nextTick(()=>{
        let contador=0;
        evento.emit('inicio');
        const intervalo = setInterval(()=>{
            evento.emit('data', ++contador)
            if (contador === maximo){
                evento.emit('fin', contador)
                clearInterval(intervalo)
            }
        },1000)
    })
}

util.inherits(Recurso,EventEmitter)
module.exports= Recurso;