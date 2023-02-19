<template>
  <div id="movie">
    <div v-if="loading" id="loading">
      <Loading />
    </div>
    <div v-else class="container">
      <h2>{{ movie.nome }}</h2>
      <img :src="movie.foto" />
      <h3>Sinopse</h3>
      <p>{{ movie.sinopse }}</p>
      <div class="buttons">
        <router-link to="/">Ver mais filmes</router-link>
        <button @click="saveMovie">Favoritar</button>
        <button>
          <a
            target="_blank"
            :href="`https://youtube.com/results?search_query=${movie.nome}+trailer`"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import api from "../service/api";
import Loading from "../components/Loading.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Loading, Footer },
  props: ["id"],
  data() {
    return {
      movie: {},
      loading: true,
    };
  },
  methods: {
    saveMovie() {
      const myList = localStorage.getItem("myMovie");
      let movies = JSON.parse(myList) || [];
      const hasMovie = movies.some((movie) => movie.id === this.movie.id);
      if (hasMovie) {
        alert("O Filme já está em sua lista!");
        return;
      }
      movies.push(this.movie);
      localStorage.setItem("myMovie", JSON.stringify(movies));
      alert("Filme adicionado aos favoritos!");
    },
  },
  async created() {
    const response = await api.get(`?api=filmes/${this.id}`);
    this.movie = response.data;
    this.loading = false;
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 900px;
}

h2 {
  text-align: center;
  color: #fff;
  margin-bottom: 0px;
  background: brown;
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.container img {
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

button {
  margin-right: 5px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  border: 0;
  padding: 12px;
  font-size: 20px;
  transition: all 0.5s;
  background: #fff;
}
button:hover {
  background: brown;
  color: #fff;
}
a {
  color: black;
  text-decoration: none;
  background: #fff;
  margin-right: 5px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  border: 0;
  padding: 12px;
  font-size: 20px;
  transition: all 0.5s;
}
a:hover {
  background: brown;
  color: #fff;
}
</style>