<template>
  <div id="home">
    <div id="movies-list" v-if="loading">
      <Loading />
    </div>
    <div v-else class="movies-list">
      <article v-for="movie in movies" :key="movie.id" class="movie">
        <strong>{{ movie.nome }}</strong>
        <img :src="movie.foto" :alt="movie.nome" />
        <router-link :to="`/filme/${movie.id}`">Acessar</router-link>
      </article>
    </div>
  </div>
</template>

<script>
import api from "../service/api.js";
import Loading from "../components/Loading.vue";
export default {
  components: { Loading },
  data() {
    return {
      movies: [],
      loading: true,
    };
  },
  async created() {
    const response = await api.get("r-api/?api=filmes");
    this.movies = response.data;
    this.loading = false;
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
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.movies-list article a {
  text-decoration: none;
  justify-content: center;

  color: #fff;
  font-size: 25px;
  background-color: brown;
  width: 100%;
  height: 40px;
  margin-top: -20px;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>