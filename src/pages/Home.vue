<template>
  <div id="home">
    <div class="movies-list">
      <article v-for="movie in movies" :key="movie.id" class="movie">
        <strong>Vingadores</strong>
        <img :src="movie.foto" :alt="movie.nome" />
        <router-link :to="`/filme/${movie.id}`">Acessar</router-link>
      </article>
    </div>
  </div>
</template>

<script>
import api from "../service/api.js";
export default {
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    const response = await api.get("?api=filmes");
    this.movies = response.data;
    console.log(response.data);
  },
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
}

.movies-list {
  margin: 15px;
}

.movies-list article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 15px;
  padding: 15px;
  border-radius: 5px;
}

.movies-list strong {
  padding-bottom: 15px;
  font-size: 20px;
}

img {
  max-height: 350px;
  width: 900px;
}

.movies-list article a {
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  background-color: brown;
  width: 100%;
  height: 40px;
  margin-top: -30px;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>