<template>
    <article>
        <h3>Esto que esta viendo es un componente</h3>
        <button>Aceptar</button>
        <p>Si fuera un id seria el : {{ id }}</p>
        <p>Si </p>
    </article>
</template>
<script>
import { provide } from 'vue';

    export default{
        name: "botonComponente",
        props:{
            id:{
                type:Number,
                default:1,
                required:false,
                validator: number =>number>0
            }
        }
    }
</script>
<style>
article{
    display: block;
    width: 200px;height: 200px;
    background-color: antiquewhite;
    color: grey;
    border-radius: 5px;
    position: relative;
    left: 400px;
}
article button{
    background-color: aqua;
    border-radius: 5px;
}
</style>