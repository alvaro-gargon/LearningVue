<template>
  <h2>Aqui tenemos un componente dinamico, con dos componentes dentro</h2>
  <componenteDinamicoPadre></componenteDinamicoPadre>
</template>
<script>
import ComponenteDinamicoPadre from '@/components/componenteDinamicoPadre.vue'
import componenteDinamicoPadre from '@/components/componenteDinamicoPadre.vue'
export default {
  name: 'componenesDinamicos',
  components: {
    componenteDinamicoPadre,
  },
}
</script>
<style></style>
