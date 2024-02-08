<template>
  <div style="width: 90%; margin: auto">
    <my-nuvbar />
  </div>
  <RatingUserList />
  <div v-if="dataStore.userBookmarks.length > 0">
    <MovieList :movies="dataStore.userBookmarks" />
  </div>
  <div v-else style="text-align: center">
    <h3>Время делать закладки :)</h3>
  </div>
  <div style="text-align: center; margin-top: 90px">
    <Button
      label="Очистить базу данных"
      severity="danger"
      @click="clear()" />
  </div>
</template>

<script setup>
import MyNuvbar from "../UI/MyNuvbar.vue";
import MovieList from "../MovieList.vue";
import RatingUserList from "../RatingUserList.vue";
import { useDataStore } from "../../store/dataStore";

const dataStore = useDataStore();

const clear = () => {
  localStorage.clear();
};
</script>
