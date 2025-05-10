<template>
  <div class="ItemOne">
    <NuxtLink class="ItemOne__Link" to="/items/001">
      <img class="ItemOne__Img" :src="item.itemimgs[0].url" alt="" />
    </NuxtLink>
    <div class="ItemOne__Text">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '@/types/app';
import type { PropType } from 'vue';

defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
});
</script>

<style scoped>
@import '@/assets/css/_vue.css';

.ItemOne {
  --item-one-width: 320px;
  --item-one-height: 240px;

  width: var(--item-one-width);
  a {
    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
}
.ItemOne__Link {
  display: block;
  width: var(--item-one-width);
  height: var(--item-one-height);
  overflow: hidden;
  border-radius: var(--border-radius);
  margin-bottom: var(--space-16);
}
.ItemOne__Img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: all 0.2s ease;
}
.ItemOne__Text {
  font-size: var(--font-size-16);

  h2 {
    font-size: var(--font-size-18);
    margin-bottom: var(--space-8);
  }
}
</style>
