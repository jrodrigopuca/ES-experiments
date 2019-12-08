<template>
    <div>
        <input type="text" v-bind:placeholder="mensaje">
    </div>
</template>

<script>
/*
* Binding
*/

export default {
    name:'C02',
    data(){
        return{
            mensaje: 'Escribe!!!',
        }
    },
}
</script>