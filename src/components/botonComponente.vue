<template>
  <!-- Este componente es un articulo con un boton que desaparece al clicarlo, y dos ids, uno proporcionado por el usuario y otro saneado -->
  <article>
    <h3>Esto que esta viendo es un componente</h3>
    <button @click="acepto" v-show="aceptar">Aceptar</button><br />
    <input v-model="nombre" />
    <p>Mi nombre es {{ nombre }}</p>
    <p>Si tuviera el id que la gente querria... : {{ id }}</p>
    <p>Si fuera el id que yo quiero ser... : {{ idSaneado }}</p>
  </article>
</template>
<script>
export default {
  name: 'botonComponente',
  props: {
    id: {
      type: Number,
      default: 1,
      required: false,
      validator: (number) => number > 0,
    },
  },
  data() {
    return {
      nombre: 'Manolo',
      aceptar: true,
    }
  },
  computed: {
    idSaneado() {
      return this.id < 0 ? this.id * -1 : this.id
    },
  },
  methods: {
    acepto() {
      this.aceptar = false
    },
  },
}
</script>
<style>
article {
  display: block;
  width: 300px;
  height: 300px;
  background-color: antiquewhite;
  color: grey;
  border-radius: 5px;
}
article button {
  background-color: aqua;
  border-radius: 5px;
  color: black;
}
</style>
