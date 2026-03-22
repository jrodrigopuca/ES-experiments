/**
 * NodeJs ya viene con algunos módulos:
 * - fs
 * - http
 * - crypto
 * - os
 */

const os = require('os');

aGigas=(valor)=>(Math.round(valor/1024/1024/1024));


console.log(`Nombre Host ${os.hostname()}`);
console.log(`Info del SO: ${os.type()}  ${os.release()}`);
console.log(`Memoria libre ${aGigas(os.freemem())}GB de ${aGigas(os.totalmem())}GB`);
console.info('Info de los CPUs: ',os.cpus())
console.log('Info de red: ', os.networkInterfaces())
console.info('Info usuario', os.userInfo())




/**
 * para conocer más detalles de la red, enviar lo siguiente desde consola
 * - ipconfig /all
 * - route print
 * 
 */