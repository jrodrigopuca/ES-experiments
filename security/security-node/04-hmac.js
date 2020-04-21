// la idea de esto es comprobar la integridad,

// probamos primero con un texto
const crypto = require('crypto');
const key= "secret"
const hmac= crypto.createHmac('sha256',key);
hmac.update("algo para encriptar");
console.log("con texto simple: ", hmac.digest('hex'));
//#=> con texto simple:  a6461ee278e8daacd31a3d21a688d3ec60101468831e75a0c9e121b9cff0fa59



// ahora con un archivo
const filename="./files/hello.txt";
const fs = require('fs');
const hmac2= crypto.createHmac('sha256', key);
const input = fs.createReadStream(filename);
input.on('readable', ()=>{
    const data = input.read();
    if (data) hmac2.update(data);
    else  console.log(`${hmac2.digest('hex')} ${filename}`);
})

// para comparar usamos una copia del mismo archivo
const filename3="./files/hello - Copy.txt";
const hmac3= crypto.createHmac('sha256', key);
const input3 = fs.createReadStream(filename3);
input3.on('readable', ()=>{
    const data = input3.read();
    if (data) hmac3.update(data);
    else  console.log(`${hmac3.digest('hex')} ${filename3}`);
})

/*
bd471676b6e66b3855099a66632edfb6073957bdcc24cb4407c450512a358f1e ./files/hello.txt
bd471676b6e66b3855099a66632edfb6073957bdcc24cb4407c450512a358f1e ./files/hello - Copy.txt
*/