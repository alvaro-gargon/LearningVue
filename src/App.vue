<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Esta es una prueba de primer uso del framework VUE</h1>
  </header>
  <h2>Vamos a probar cositas</h2>
  <h3>Como se puede comprobar,esto es una SPA (single page application) ya que, aunque cambia la ruta en la url, 
    en verdad seguimos en la misma página, pero con contenido diferente en el medio (SE MATIENE HEADER, FOOTER Y TODO LO QUE 
    HAYA ANTES Y DESPUES)</h3>

  <RouterView />
  <RouterLink to="/">Principal</RouterLink>
  <RouterLink to="/pruebas">Pruebas</RouterLink>
</template>

<style scoped>
  header{
    background-color: orange;
    text-align: center;
  }

</style>
