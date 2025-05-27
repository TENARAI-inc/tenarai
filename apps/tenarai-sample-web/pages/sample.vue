<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
const title = ref('Sample Page');

setTimeout(() => {
  title.value = 'Updated Sample Page Title';
}, 3000);
</script>

<style scoped lang="css">
div {
  padding: 40px;
}
</style>
