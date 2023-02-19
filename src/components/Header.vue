<template>
  <header id="header">
    <router-link to="/" class="catalogo">Catálogo de Filmes</router-link>
    <router-link to="/favoritos" class="my-favorites">Favoritos</router-link>
    <router-link to="/contato" class="contact">Contato</router-link>
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
  color: black;
}

.my-favorites {
  text-decoration: none;
  cursor: pointer;
  border: 0;
  background: #fff;
  padding: 5px 15px;
  outline: none;
  color: black;
  border-radius: 5px;
}
.contact {
  color: black;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  background: #fff;
  padding: 5px 15px;
  outline: none;
  border-radius: 5px;
}
</style>