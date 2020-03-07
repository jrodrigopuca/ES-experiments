## Intro
- Hilos separados para UI, layout y JS
- Comunicación asincrona mediante un 'bridge'
    - hilo de JS pedirá que los elementos de UI se muestren
    - hilo de Javascript puede ser bloqueado y la UI continuará funcionando
## Componentes 
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




    
