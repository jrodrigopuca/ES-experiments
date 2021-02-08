const { clearInterval } = require("timers");

var contador=0;
var ciclo= setInterval(function(){
    console.log(`ya pasaron ${contador} segundos`)
    comparar()
    contador++;
},1000); // ejecutar cada segundo

comparar = ()=>{
    if (contador>25){
        clearInterval(ciclo);
        console.log(`en este programa solo nos gusta los ciclos de 25 segundos`)
    }    
}

//para usar en front: http://jsfiddle.net/Vv2u3/16/

