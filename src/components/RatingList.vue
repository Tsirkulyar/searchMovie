<template>
    <div v-for="rating in dataStore.userRating">
         <rating-item :rating="rating"/>
    </div>
    <Button label="clear" @click="clear()"></Button>
</template>
<script setup>
import RatingItem from './RatingItem.vue';
import { useDataStore } from '../store/dataStore';

const dataStore = useDataStore()

const clear = () =>{
    
    localStorage.clear()
}
</script>