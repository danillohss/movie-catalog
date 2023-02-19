<template>
  <header id="header">
    <router-link to="/" class="catalogo">Catálogo de Filmes</router-link>
    <router-link to="/favoritos" class="meus-favoritos">Favoritos</router-link>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background-color: brown;
}

.catalogo {
  text-decoration: none;
  cursor: pointer;
  border: 0;
  background: #fff;
  padding: 5px 15px;
  outline: none;
  border-radius: 5px;
}

.meus-favoritos {
  text-decoration: none;
  cursor: pointer;
  border: 0;
  background: #fff;
  padding: 5px 15px;
  outline: none;
  border-radius: 5px;
}
</style>