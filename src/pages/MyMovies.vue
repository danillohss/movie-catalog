<template>
  <div id="my-movies">
    <div v-if="!loading" class="loading">
      <Loading />
    </div>
    <div v-else class="container">
      <h1>Meus filmes favoritados</h1>
      <span v-if="movies.length <= 0">
        Você não possui nenhum filme salvo :(
      </span>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <span>{{ movie.nome }}</span>
          <div>
            <router-link :to="`/filme/${movie.id}`">Ver detalhes</router-link>
            <button @click="deleteMovie(movie.id)">Excluir</button>
          </div>
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Loading from "../components/Loading";
import Footer from "../components/Footer";
export default {
  components: { Loading, Footer },
  data() {
    return {
      loading: true,
      movies: [],
    };
  },
  methods: {
    deleteMovie(id) {
      let filterMovie = this.movies.filter((movie) => {
        return movie.id !== id;
      });
      return (this.movies = filterMovie);
    },
  },
  watch: {
    movies() {
      localStorage.setItem("myMovie", JSON.stringify(this.movies));
    },
  },
  async created() {
    const myList = localStorage.getItem("myMovie");
    this.movies = JSON.parse(myList) || [];
  },
};
</script>

<style scoped>
#my-movies {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

ul {
  padding: 0;
}

ul li {
  padding: 0;
  list-style: none;
  min-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

span {
  font-size: 25px;
}

h1 {
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>