<template>
  <article class="ItemDetail">
    <ul class="ItemDetail__Breadcrumb">
      <li>
        <NuxtLink class="Link" to="/">一覧</NuxtLink>
      </li>
      <li>/</li>
      <li>
        <NuxtLink class="Link -disabled" to="">{{ item.name }}</NuxtLink>
      </li>
    </ul>
    <div class="ItemDetail__Body">
      <div class="ItemDetail__Image">
        <img :src="item.itemimgs[0].url" alt="" />
      </div>
      <div class="ItemDetail__Info">
        <h1 class="ItemDetail__ItemTitle">{{ item.name }}</h1>
        <p class="ItemDetail__ItemPrice">{{ price }}</p>
        <p class="ItemDetail__ItemDes">
          説明文が入ります。説明文が入ります。説明文が入ります。
        </p>
        <Button label="カートに追加" color @click="emit('addItem', item)" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import Button from '@/components/Button.vue';
import { dispPrice } from '@/utils/display';
import type { Item } from '@/types/app';

const emit = defineEmits(['addItem']);
const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
});

const price = dispPrice(props.item.price);
</script>

<style scoped>
@import '@/assets/css/_vue.css';

.ItemDetail {
  width: 80%;
  margin: 0 auto;
}
.ItemDetail__Breadcrumb {
  display: flex;
  margin-bottom: var(--space-32);
  & > li {
    margin-right: var(--space-16);
  }
}
.ItemDetail__Image {
  img {
    width: 100%;
    max-width: 500px;
    border-radius: var(--border-radius);
  }
}
.ItemDetail__Body {
  display: flex;
}
.ItemDetail__Info {
  padding-left: var(--space-32);
}
.ItemDetail__ItemTitle {
  font-size: var(--font-size-32);
  margin-bottom: var(--space-16);
}
.ItemDetail__ItemPrice {
  font-size: var(--font-size-24);
  margin-bottom: var(--space-16);
}
.ItemDetail__ItemDes {
  font-size: var(--font-size-18);
  margin: var(--space-32) 0;
}
</style>
