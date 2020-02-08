/**
 *  @description Esto es solo para recordar en base al CS50
 */

// Definir array
const arr= [1,'texto', function(){console.log('hi')}];
arr[2]();

// coerción: forma de pasar de un tipo a otro
//coerción explicita vs implicita
const x=42;
const exp = String(x);  // "42"
const imp = x + "";     // "42"

// traer el tipo 
console.log(typeof imp); //string

// formas de escribir objetos
const o1 = new Object();
o1.nombre="Juan";
o1.isCoding = true;
o1.greet= ()=>{console.log('hi')};

const o2 = new Object();
o2["nombre"]="Juan";
const key= "isCoding";
o2[key] = true;
o2["greet"]= ()=>{console.log('hi')};

const o3={nombre:'Juan', isCoding:true, greet:function(){console.log('hi o3')}};

console.log(o3.greet());

// cambiar valores (referencia)
// estos valores apuntan a una misma referencia y al haber un cambio tambien se afectan
const o4={a:'a',b:'b'};
const o5=o4;
o4.a='nuevo';
console.log(o5.a); // nuevo


// por valor
const o6={a:'a',b:'b'};
const o7=Object.assign({},o6) //fusiona a {}+ o
o6.a='nuevo';
console.log(o7.a); // a

// llamando a funciones (se puede hacer en cualquier parte)
runThis();

function runThis(){
    console.log('función declarada al final')
}

/**
 *  Al definir algo como var queda como global
 * 
 * en consola de Chrome: 
 * var y = "hola";
 * window.y //"hola"
 * 
 * en consola interactiva de nodeJS (node -i) 
 * var x= "Hola";
 * global.x //"Hola"
 * 
 */

// Clousure: es una función que tiene acceso a variables que ya dejo atrás
function getNumbersVar(){
    const arr=[];
    for (var i=0; i<5; i++){
        arr.push(function(){console.log(i)})
    }
    return arr;
}

function getNumbersLet(){
    const arr=[];
    for (let i=0; i<5; i++){
        arr.push(function(){console.log(i)})
    }
    return arr;
}

const arr0=getNumbersVar();
arr0[0](); //5

const arr1=getNumbersLet();
arr1[0](); //0

//Otro ejemplo de closure
function makeHello(){
    const msg= 'Hello';

    function sayHello(){
        console.log(msg);
    }
    return sayHello
}

const hi = makeHello();
hi();

// iife clousure
// función de ejecución inmediata
const decirHola = (function(){
    const msg= 'Hello 2';

    function sayHello(){
        console.log(msg);
    }
    return sayHello
})();

decirHola();

//iife clousure
// limitar scope sin necesidad de poner una variable en global
const contador = (function(){
    let contar=0;
    return{
        inc: function(){contar=contar+1}, 
        get: function(){console.log(contar)},
    }
})()

contador.get();
contador.inc();
contador.get();

console.log("----")

//iife clousure
//carga un array de funciones, al llamar la función devuelve un número.
//nota: en este caso se uso el var como en getNumbersVar()
function getNumbers2(){
    const arr=[];
    for (var i=0; i<5; i++){
        arr.push(
            (function(x){
                return function(){console.log(x)}
            })(i)
        )
    }
    return arr;
}

const funArray = getNumbers2();
funArray[3](); //3
