const numeroSuerte=Math.floor(Math.random()*50)*2;

const esPar = (valor, callback)=>{
    callback(valor%2!=0,valor*2)
}

module.exports.esPar = esPar;
module.exports.numero= numeroSuerte;
