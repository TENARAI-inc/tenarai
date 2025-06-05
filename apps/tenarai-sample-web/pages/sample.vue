<template>
  <div>
    <h1>{{ title }}</h1>

    <ul>
      <li v-for="cat in cats" :key="cat.name">
        {{ cat.name }} ({{ cat.age }}歳) - {{ cat.type }}
      </li>
    </ul>

    <p>{{ priceDisp(123456) }}</p>
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

const priceDisp = (price: number): string => {
  return `${price.toLocaleString()}円`;
};
</script>

<style scoped lang="css">
div {
  padding: 40px;
}
</style>
