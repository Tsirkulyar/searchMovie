<template>
  <div class="star-wrapper">
    <Rating
      v-model="inputValue"
      :stars="10"
      :cancel="false"
      class="star"
      v-tooltip.right="{
        value: `Данный фильм на «Кинопоиск» оценили более ${dataStore.movieObj.votes.kp}`,
        showDelay: 300,
        hideDelay: 700,
      }"
    />
  </div>
</template>

<script setup>
import { useDataStore } from "../../store/dataStore";
import { ref, watch } from "vue";


const inputValue = ref("");
const ratingId = ref({
  'id': "",
  'name': "",
  'star': ""
  
});

const dataStore = useDataStore();

console.log(dataStore.movieObj);

const saveRatingData = (star)=>{
    ratingId.value.id = dataStore.movieObj.id
    ratingId.value.name = dataStore.movieObj.name
    ratingId.value.star = star
    dataStore.userRating.push(ratingId.value)
}

watch(
        () => inputValue,
        (state) => {
          saveRatingData(state.value)
        },
        { deep: true }
      );
</script>

<style scoped>
.star-wrapper {
  display: flex;
  justify-content: center;
}
</style>
