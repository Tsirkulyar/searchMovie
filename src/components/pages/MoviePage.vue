<template>
  <div>
    <my-nuvbar />
    <div v-if="dataStore.movieObj">
      <MovieData />
      <WatchFilms />
      <div v-if="dataStore.selectedArr.length > 0">
        <MovieList :movies="dataStore.selectedArr" />
      </div>
    </div>
  </div>
</template>

<script setup>
import MyNuvbar from "../UI/MyNuvbar.vue";
import MovieData from "../MovieData.vue";
import { useRoute } from "vue-router";
import { useDataStore } from "../../store/dataStore";
import WatchFilms from "../WatchFilms.vue";
import MovieList from "../MovieList.vue";
import { watch, ref } from "vue";

const dataStore = useDataStore();

const route = useRoute();
const id = ref(route.params.id);

dataStore.getMovie(id.value);

setTimeout(() => {
  dataStore.selectRatingFilm();
}, 1500);

watch(
  () => id.value,
  (state) => {
    dataStore.getMovie(state);
  },
  { deep: true }
);
</script>
