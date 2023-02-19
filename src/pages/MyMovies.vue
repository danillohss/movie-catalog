<template>
  <div id="my-movies">
    <div v-if="loading" class="loading">
      <Loading />
    </div>
    <div v-else class="container"></div>
  </div>
</template>

<script>
import Loading from "../components/Loading";
export default {
  components: { Loading },
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style>
</style>