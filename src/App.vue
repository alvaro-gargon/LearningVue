<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <header>
      <h1>Esta es una prueba de primer uso del framework VUE</h1>
    </header>
    <h2>Vamos a probar cositas</h2>
    <h3>
      Como se puede comprobar,esto es una SPA (single page application) ya que, aunque cambia la
      ruta en la url, en verdad seguimos en la misma página, y NO SE HA RECARGADO al cambiar la ruta
    </h3>

    <RouterView />
  </main>
  <footer>
    <RouterLink to="/"><button>Principal</button></RouterLink>
    <RouterLink to="/pruebas"><button>Pruebas</button></RouterLink>
    <RouterLink to="/componentes"><button>Componentes</button></RouterLink>
    <RouterLink to="/apis"><button>APIs</button></RouterLink>
  </footer>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
main {
  height: 90%;
}
header {
  background-color: orange;
  text-align: center;
}
header h1 {
  margin: 0;
}
footer {
  position: relative;
  bottom: 0;
  height: 10%;
  background-color: antiquewhite;
  display: flex;
  justify-content: space-around;
}
footer button {
  width: 160px;
  height: 40px;
  background-color: orange;
  color: white;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
