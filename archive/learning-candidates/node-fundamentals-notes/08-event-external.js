const Recurso= require('./auxiliar/recurso.js');

const recursoLocal= new Recurso(4);

recursoLocal.on('inicio', ()=>console.log('Iniciado'))
recursoLocal.on('data', (valor)=>console.log(`estoy en ${valor}`))
recursoLocal.on('fin', (valor)=>console.log(`se termina en ${valor}`))
