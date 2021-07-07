### opciones del compilador

```
--noImplicitAny: no deja pasar los tipo any
--target: versión de salida
```
[Más opciones](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

### Para comenzar
- instalar ts ```npm install -g typescript```
- crear el archivo de configuración ```tsc init```
- en el archivo de configuración:
    - modificar el tipo de target a ES2015
    - modificar salida a "./build"

### Tipos

Todos los tipos en TS son subtipos de "any":
- Tipos primitivos: boolean, number, string, enum, void (ausencia de valor de retorno)
- Tipos de objetos: class, interface, array, literals(todo lo que no sea primitivo)
- Tipos de parametros
- null/undefined

Ejemplo del uso del Enum 
```
enum EstadoContrato {
    Permanente,
    Temporal,
    Terminado
}

let estadoEmpleado: EstadoContrato = EstadoContrato.Temporal
console.log(estadoEmpleado)

```

### Any y unknown
Any es un tipo que puede ser usado expresamente para
- Una propiedad que no existe un tipo
- usarlo para una función
- un método que solo devuelve un tipo string
- Recordar que con 'any' se pierde la seguridad del tipo

Unknown es el tipo desconocido para propiedades que no puedes acceder o formas en las cuales no puedes llamarlas o construirlas.

Any y unknown son bastantes parecidos, solo que unknown genera un error de compilación y any recién evalúa en tiempo de ejecución

### Type assertion
Usado para pasar una variable a otro tipo de dato. Para usarlo es necesario usar la palabra "as"

```
let valor:unknown="10";
valor="test"
console.log((valor as string).toUpperCase());

```

https://docs.microsoft.com/en-us/learn/modules/typescript-declare-variable-types/6-unions-intersections