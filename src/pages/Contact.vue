<template>
  <h1>Redes e contatos profissionais</h1>
  <div class="contact">
    <button>
      <a target="blank" href="https://www.linkedin.com/in/danillohss"
        >LinkedIn</a
      ><br />
    </button>
    <button>
      <a target="blank" href="https://github.com/danillohss">GitHub</a><br />
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
  background: #fff;
  margin-right: 5px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  border: 0;
  padding: 8px;
  font-size: 15px;
  transition: all 0.5s;
}
a:hover {
  background: brown;
  color: #fff;
}

button {
  margin-left: 10px;
  margin-right: 5px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  border: 0;
  padding: 8px;
  font-size: 15px;
  transition: all 0.5s;
  background: #fff;
}
button:hover {
  background: brown;
  color: #fff;
}
</style>