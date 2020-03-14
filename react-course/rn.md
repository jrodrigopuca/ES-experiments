## Intro
- Hilos separados para UI, layout y JS
- Comunicación asincrona mediante un 'bridge'
    - hilo de JS pedirá que los elementos de UI se muestren
    - hilo de Javascript puede ser bloqueado y la UI continuará funcionando
## Componentes 
- retornar un nodo (algo puedes renderizar)
- representan un lugar de la UI
- todos los React component debería actuar como funciones puras con respecto a sus props
- Dos tipos: 
    - Stateless Functional Components ó Component funcional sin estado (SPC) también conocidos como Pure Functional Component. Son basicamente funciones que toman props y devuelven algún nodo, sin usar estados, no deberían modificar nada.
    - React.Component: es algo provisto por la librería de React e implementado por nosotros

- para cada componente se deberá incorporar desde import
- Modificaciones de web a mobile:
    - div   --> View
    - span  --> Text
    - button --> Button
    - ScrollView

## Estilos
- no existe el concepto de CSS, se deberá usar JS
- React Native usa objetos JS para estilos
- Las claves de los objetos son basados en propiedades de CSS:
    - padding-top --> paddingTop
    - background-color --> backgroundColor
- el layout se encuentra basado en flexbox. Por defecto las cosas las colocamos en columnas (ya no en filas)
- Para longitudes se utilizan números (no se especifica px u otras unidades)
- propiedad de estilo puede tomar un array de estilos
- ```style={{}}``` significa que uso Javascript y dentro voy a usar un objeto.
- Se puede usar Stylesheet.create(): crea un bridge entre JS y la UI
    - Funcionalmente es lo mismo que crear objetos de estilos
    - Optimización: envia solo IDs sobre el bridge

## Eventos
- No es como web, no cada componente tiene cada interacción.
- Solo hay pocos componentes presionables o 'clickables'
    - Button
    - TouchableOpacity, TouchableHighlight, TouchableWithouthFeedback
    - TouchableNativeFeedback (Android only)
- En web los eventos reciben un argumento, pero en RN pueden recibir diferentes argumentos
    - Consultar la documentación

## React.Component 
- Una clase abstracta que se puede extender para compartarse como quieras
- Tiene caracteristicas adicionales que las SFCs no tiene:
    - Mantener su propio estado
    - Tener instancia
    - Tener métodos de ciclo de vida
- cuando se crea una instancia se puede utilizar las propiedades de la clase y los props para renderizar algo. 

## Ciclo de vida
- Mount: Primero se monta el componente 
    - constructor(props): inicializa el estado u otras propiedades de la clase
    - render: regresa el nodo
    - componentDidMound(): Hacer algo que no sea necesario para la UI: acciones asincrónicas, timers, etc. Cambiar el estado aqui hará que se re-renderiza antes de actualizar la UI.
- Update: renderizar, esto sucede cuando se recibe nuevos props o se cambia el estado
    - componentWillReceiveProps(nextProps): Actualiza cualquier estado que dependa de los props
    - shouldComponentUpdate(nextProps, nextState): compara los valores cambiados, regresa true si el componente debe renderizar, si retorna false el ciclo de update termina.
    - render()
    - componentDidUpdate(prevProps, prevState): haz algo que no necesita de la UI (solicitud de red)
- Unmount: cuando el componente necesita desaparecer o desmontarse. 
    - componentWillUnmount(): limpia (elimina eventos listeners, invalida solitud de red, limpia timers)

## Expo 
- la forma más rápida de crear una app
- Conjunto de herramientas para acelerar el proceso de desarrollo con RN
    - snack: corre RN en el navegador
    - XDE: una GUI para compartir y publicar proyectos de Expo
    - CLI: una interfaz de linea de comando para servir, compartir y publicar proyectos
    - cliente: corre tus proyectos sobre tu telefono mientras desarrollas.
    - SDK: agrupa y brinda bibliotecas multiplaformas y APIs
## CLI 
```
$ expo init . --template bare-minimum --yarn
$ yarn start
``` 

## Export/Import
- Los componentes son excelentes para simplificar código
- Nosotros podemos dividir componentes en sus propios archivos
    - Ayuda a organizar el proyecto.
    - Exportar el componente que queramos desde una sola línea
- Importar el componente si queremos usarlo
- Default vs import/export con nombre: Al importar por nombre es necesario usar las llaves, cuando es por default no es necesario.

```
    // import-export con nombre
    export const Count = ()=>{..}
    import {Count} from './Count.js'

    // import-export default
    export default Count;
    import Count from './Count.js'

    // import-export default (también puedo cambiar el nombre en el import)
    export default Count;
    import CountApp from './Count.js' //CountApp hace referencia a Count

    //mezclar las dos opciones
    export const num =50;
    export default Count;
    import CountApp, {num} from './Count.js'  
```

## PropTypes
- Permite que React valide los tipos de props en los componentes en tiempo de ejecución
- Es una herramienta que permite a los desarrolladores asegurarse que ellos están pasando los props correctamente.
- Ayuda a documentar el acceso a tus componentes
- Solo corre durante el desarrollo
- En clases la convención es usarlo a PropTypes dentro como un estático:
```
export default class C01 extends React.Component{
    static propTypes={count:PropTypes.number.isRequired}
    ...
    
    }
```

## Leer documentación
- Tener un objetivo en mente: Se necesita saber qué problema está tratando de resolver
- Ver lo que la librería/framework/API ofrece
- Encontrar algo que solucione tu problema
- Configurar usando el API 





