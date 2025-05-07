<template>
  <article class="ItemList">
    <ul class="ItemList__List">
      <li v-for="(item, index) in 10" :key="`itemone-${index}`">
        <ItemOne class="ItemList__ItemOne" />
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
  import ItemOne from '@/components/home/ItemOne.vue';
</script>

<style scoped>
  @import '~/assets/css/_vue.css';

  .ItemList__List {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  .ItemList__ItemOne {
    margin: var(--space-16);
  }
</style>
