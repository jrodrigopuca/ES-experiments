Callback
- basado en Solitud/Respuesta
- Sin resultado hasta que se responda
- Puede terminar en resultado o en error
```
traerElementos(params, (error, lista)=>{
    //revisar error
    //hacer algo con los elementos
})
```


Eventos
- basado en Publicar/Suscribir
- Actua sobre los resultados una vez que llegan
- resultados parciales antes del error
```
    var resultado = traerElementos(params)

    resultado.on('item', (i)=>{/*hacer algo con cada item*/})
    resultado.on('done', (i)=>{/*Sin items*/})
    resultado.on('error',(err)=>{/*hacer algo con el error*/})
```

En NodeJS se tiene a 'EventEmmiter'
```
    //para publicar
    emitter.emit('miEvento', [args])

    //para suscribirse
    emitter.on('miEvento',listener)
```
Un evento puede ser enviado con cero o más argumentos
El conjunto de eventos y sus argumentos constituye una interfaz de lo que se puede suscribir

Hay dos posibilidades para los EventEmitters:
- devolver un valor desde una función
- Objetos que extienda al EventEmitter para emitir eventos
