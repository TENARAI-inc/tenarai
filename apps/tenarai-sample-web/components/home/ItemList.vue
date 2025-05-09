<template>
  <article class="ItemList">あいう</article>
</template>

<script setup lang="ts">
import type { Item } from '@/types/app';

defineProps({
  items: {
    type: Array as PropType<Item[]>,
    required: true,
  },
});
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
