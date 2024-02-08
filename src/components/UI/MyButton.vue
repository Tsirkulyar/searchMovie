<template>
  <Button class="button" style="height: 50px;width: 100%;">
    <a :href="btn.url" >
      <img :src="btn.logo.url" style="height: 100%"/>
    </a>
  </Button>
</template>
<script setup>
const props = defineProps(["btn"]);
console.log(props.btn.logo.url);
</script>
<style scoped>
.button{
    background-image: url('props.btn.logo.url');
}
</style>
