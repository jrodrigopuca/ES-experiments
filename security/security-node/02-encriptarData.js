const crypto = require('crypto');
const algoritmo = 'aes-256-cbc';
const password= 'Password para generar la clave';
const sal = crypto.randomBytes(32);
const clave= crypto.scryptSync(password, sal, 32); //un resultado de 32 bytes
const iv=crypto.randomBytes(16); //vector inicial

const cipher = crypto.createCipheriv(algoritmo, clave, iv);

let encriptado = cipher.update("para-encriptar", 'utf8', 'hex');
encriptado+= cipher.final('hex');
console.log("encriptado:  ",encriptado); //#=> 0456e9d10f5310dbb35d57d55de48bb0

const decipher = crypto.createDecipheriv(algoritmo, clave, iv);
let desencriptado=decipher.update(encriptado, 'hex', 'utf8');
desencriptado = decipher.final('utf-8');
console.log("desencriptado: ", desencriptado) //#=> para-encriptar
