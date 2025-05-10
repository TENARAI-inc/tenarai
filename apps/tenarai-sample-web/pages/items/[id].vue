<template>
  <main>
    <GlobalHeader />

    <section class="SectionItemDetail">
      <ItemDetail
        v-if="currentItem"
        :item="currentItem"
        @add-item="(item) => addItem(item)"
      />
    </section>

    <GlobalFooter />
  </main>
</template>

<script setup lang="ts">
import GlobalHeader from '@/containers/GlobalHeader.vue';
import GlobalFooter from '@/containers/GlobalFooter.vue';
import ItemDetail from '@/components/home/ItemDetail.vue';
import type { Item } from '@/types/app';
import { useItem } from '@/composables/useItem';

const route = useRoute();
const id = route.params.id as string;
console.log('id', id);
const uitem = useItem();
const cart = useCart();
const currentItem = ref<Item | null>(null);
const addItem = (i: Item) => {
  cart.addCart(i);
};
onMounted(async () => {
  const item = await uitem.fetchItem(parseInt(id, 10));
  if (item) {
    console.log('あていむ', { ...item });
    currentItem.value = item;
  }
});
</script>

<style scoped lang="css">
@import '@/assets/css/_vue.css';

.SectionHead {
  text-align: center;
  padding: var(--space-64) 0;
  font-size: var(--font-size-18);

  h1 {
    font-size: var(--font-size-32);
    margin-bottom: var(--space-16);
  }
}
.SectionItemDetail {
  padding: var(--space-64) 0 var(--space-64);
}
.SectionInfo {
  text-align: center;
  background-color: #333;
  color: white;
  padding: var(--space-64) var(--space-32);
  height: 600px;

  h2 {
    font-size: var(--font-size-32);
    margin-bottom: var(--space-32);
  }

  p {
    font-size: var(--font-size-18);
    margin-bottom: var(--space-16);
  }
}
</style>
