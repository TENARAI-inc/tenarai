<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
const title = ref('Sample Page');

const cats = [
  { name: 'ねこすけ', age: 3, type: 'マンチカン' },
  { name: 'にゃんた', age: 1, type: 'ロシアンブルー' },
  { name: 'ニャース', age: 5, type: 'ペルシャ' },
];

console.log(JSON.stringify(cats, null, 2));

setTimeout(() => {
  title.value = 'Updated Sample Page Title';
}, 3000);
</script>

<style scoped lang="css">
div {
  padding: 40px;
}
</style>
