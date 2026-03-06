<template>
  <button v-if="visible" @click="eliminar">Eliminar botón</button>
</template>

<script>
export default {
  name: 'botonEliminarse',
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    eliminar() {
      this.visible = false
    },
  },
}
</script>
