<template>
  <div class="ItemOne">
    <NuxtLink class="ItemOne__Link" :to="`/items/${item.id}`">
      <Image class="ItemOne__Img" :src="imgUrl" :alt="item.name" />
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
import Image from '@/components/Image.vue';

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
});
const imgUrl = computed(() => {
  if (!props.item.itemimg || props.item.itemimg.length === 0) {
    return '';
  }
  return props.item.itemimg[0].url;
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
  overflow: hidden;
  border-radius: var(--border-radius);
  margin-bottom: var(--space-16);
}
.ItemOne__Img {
  display: block;
  width: var(--item-one-width);
  height: var(--item-one-height);
  object-fit: cover;
}
.ItemOne__Text {
  font-size: var(--font-size-16);

  h2 {
    font-size: var(--font-size-18);
    margin-bottom: var(--space-8);
  }
}
@media (--tablet) {
  .ItemOne {
    --item-one-width: 100%;
    --item-one-height: auto;
  }
}
</style>
