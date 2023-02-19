<template>
  <h1>Carregando...</h1>
  <div class="c-loader"></div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  justify-content: center;
}

.c-loader {
  position: absolute;
  left: 48%;
  top: 50%;
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #f10c0c;
  height: 50px;
  width: 50px;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
</style>