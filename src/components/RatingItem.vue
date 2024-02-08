<template>
    <div>
        <p>{{ rating }}</p>
    </div>
</template>
<script setup>

const props = defineProps(['rating'])
console.log(props.rating)

</script>