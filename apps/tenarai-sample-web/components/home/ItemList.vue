<template>
  <article class="ItemList">
    <ul class="ItemList__List">
      <li v-for="(item, index) in items" :key="`itemone-${index}`">
        <ItemOne class="ItemList__ItemOne" :item="item" />
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import ItemOne from '@/components/home/ItemOne.vue';
import type { Item } from '@/types/app';
import type { PropType } from 'vue';

defineProps({
  items: {
    type: Array as PropType<Item[]>,
    required: true,
  },
});
</script>

<style scoped>
@import '@/assets/css/_vue.css';

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

@media (--tablet) {
  .ItemList__List {
    padding: var(--space-16);
    li {
      width: 50%;
      padding: var(--space-8);
    }
  }
  .ItemList__ItemOne {
    margin: 0;
  }
}
</style>
