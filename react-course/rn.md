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

## Scrollview
- Permite desplazamiento

## FlatList
- Una vista mejorada para mostrar una gran cantidad de datos
- "Virtualizado": solo muestra lo que se necesita en el tiempo:
	- Solo las filas visibles son renderizadas en el primer ciclo
	- Las filas son recicladas y las filas que ya no son visibilizadas pueden ser desmontadas
- En props se debe pasar un array de los datos (data) y una función que detalle como esos item serán renderizados (renderItem)
- Solo actualiza si sus props son cambiados 	

## SectionList
- Similar a FlatList con soporte adicional para secciones.
- En vez de usar 'data' usa 'sections'
	- cada sección tiene su propio array
	- cada sección puede sobreescribir el renderItem con su propia función
- Se debe usar la función renderSectionHeader para los encabezados

## Input
- controlado vs no-controlado:
	- la entrada es una fuente confiable?
- React recomienda siempre usar componentes controlados
- Usar OnChangeText (callback que se usa al cambiar un valor)

## Manejando multiples entradas
- form existe en html pero no en RN
- con los componentes controlados, nosotros obtenemos un objeto con todos los valores de las entradas
- Nosotros podemos definir una función que administre como los datos son enviados (como un controlador)

# Validando Entrada
- Condicionando el estado basado en el valor de la entrada
- Validar formulario antes de enviar
- Validar formulario despues de un cambio en el input
 	- this.setState() puede tomar un callback como un segundo argumento
 	- también se puede usar a componentDidUpdate()

## KeyboardAvoidingView
- El componente nativo puede evitar el teclado virtual
- Es bueno para formas simples:
	- La vista mueve independiente de cualquier input
	
## Debugging
- errores/warnings en React
    - Errores: se muestran como alertas a página completa
        - console.error('error')
        - throw new Error('this is also an error')
    - Advertencias: se muestran como avisos en la parte inferior de la app
        - console.warn('advertencia')
        - no aparecen en modo de producción
- Chrome Developer Tools (devtools)
    - usar breakpoints
- RN Inspector
    - similar al inspector de elementos de Chrome
    - permite inspeccionar a los elementos (margin, padding, size, etc)
    - no permite modificar elementos en el momento
- react-devtools
    - inspecciona la jeraquía de los componentes de React, incluyendo prop y states de los componentes
    - instalar con ```npm install -g react-devtools```
    - iniciar con ```react-devtools```
    - permite editar en el momento a los estilos, props, etc.
    - usarlo junto con el emulador (no funciona en RN web o con un dispositivo conectado)

## Librerías externas
- es código escrito fuera del contexto de tu proyecto que puedes usarlo dentro de tu proyecto
- como RN es solo JS, puedes agregar cualquier librería JS
- agregarlo usando yarn/npm 

## Navegación con React
Formas de implementarlo una navegación:
- Implementarlo con JS + React
- Implementarlo en nativo: usando un wrapper para las APIs existentes en iOS/Android 
RN usa la primera implementación
para instalar usar ```npm install react-navigation ```

### Realizando la navegación con React Navigation
- Navigator: es un componente que implementa un patrón de navegación (ej: tabs)
- Cada navigator puede tener una o más rutas (routes)
- Cada ruta debe tener un nombre y un componente (screen component)
    - el nombre es único en la app
    - los screen components son los componente que se mostrarán cuando la ruta este activa
    - el screen component también puede ser otro navigator.

### Creando la navegación
Crear Navigator: se utiliza la función creatSwitchNavigator que devuelve un componente, es un HOC, es un componente que devuelve componentes y nombre de rutas.

```
import {createSwitchNavigator} from 'react-navigation';

const AppNavigator = createSwitchNavigator({
    "RutaUno":ScreenComponentOne,
    "RutaDos":ScreenComponentTwo,
})
```

Mostrar el navigator: por lo general esto se realiza desde la raíz de la app

```
export default class App extends React.Component{
    render(){
        return <AppNavigator/>
    }
}
```

Navegando a otra ruta: cada Screen component tiene como prop a navigation y desde allí se puede redireccionar.

```
class ScreenComponentOne extends React.Component{
    render(){
        return (<Button title="Ir a dos" 
        onPress={()=>this.props.navigation.navigate('RutaDos')}/>)
    }
}
```


### HOC (Higher order components)
- Es una técnica avanzada en React para reutilizar componentes
- son similares a las higher order functions, las cuales son funciones que toman funciones como argumentos o regresan una función como resultado.
- [Más info](http://reactjs.org/docs/higher-order-components.html)





