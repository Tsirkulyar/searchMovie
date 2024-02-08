<template>
  <div class="general-wrap">
    <div class="text-star">
      <h1>Ваши нескромные оценки:</h1>
    </div>

    <Listbox
      v-model="selectedCity"
      :options="dataStore.userRating"
      optionLabel="name"
      class="wrap-star"
    >
      <template #option="slotProps">
        <div class="star-list">
          {{ slotProps.option.name }}
          <Rating
            v-model="slotProps.option.star"
            readonly
            :cancel="false"
            :stars="10"
          />
        </div>
      </template>
    </Listbox>

    <div class="text-star">
      <h1>Фильмы, которые Вы сохранили:</h1>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from "../store/dataStore";

const dataStore = useDataStore();
</script>

<style scoped>
.star-list {
  display: flex;
  justify-content: space-between;
}
.wrap-star {
  width: 50%;
  margin: auto;
}
.general-wrap {
  width: 80%;
  margin: auto;
}
.text-star {
  margin-top: 30px;
}
</style>
