<template>
  <div class="card flex justify-content-center">
    <Dropdown
      v-model="select"
      :options="dataStore.arrFilterTitle"
      optionLabel="body"
      placeholder="Сортировать"
      class="w-full md:w-14rem"
    />
  </div>

  <!-- <select  @change="updateValue">
        <option value selected hidden disabled>ВЫбери</option>
        <option v-for="option in dataStore.arrFilterTitle" 
        :value="option.value"
        :key="option.value">
        {{ option.body }}
        
        </option>
    </select> -->
</template>
<script setup>
import { ref, watch } from "vue";
import { useDataStore } from "../../store/dataStore";

const dataStore = useDataStore();
const select = ref("");

watch(
  () => select,
  (state) => {
    dataStore.movieFilter(state.value.value);
  },
  { deep: true }
);

</script>
