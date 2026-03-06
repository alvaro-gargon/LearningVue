<template>
  <div>
    <h2>
      Esta página esta dedicada a explicar y mostrar el funcionamiento de aspectos básicos de Vue.js
    </h2>
    <BotonEliminarse></BotonEliminarse>
    <p>
      Cada página tratará sobre un tema, para navegar entre ellas, pulse los botones en la parte
      inferior de la página
    </p>
  </div>
</template>
<script>
import BotonEliminarse from '@/components/botonEliminarse.vue'

export default {
  name: 'app',
  components: {
    BotonEliminarse,
  },
}
</script>
<style></style>
