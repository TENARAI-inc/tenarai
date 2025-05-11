<template>
  <main class="PageItemDetail">
    <GlobalHeader />

    <section class="PageItemDetail__Body">
      <!-- Loading -->
      <div v-if="!visibleDetail" class="PageItemDetail__Loading">
        <Loading />
      </div>
      <!-- 詳細 -->
      <Transition name="fade">
        <ItemDetail
          v-if="visibleDetail"
          :item="currentItem"
          :is-cart-added="cart.isCartAdded(currentItem!)"
          :is-logined="auth.isLogined"
          @add-item="(item) => addItem(item)"
        />
      </Transition>
    </section>

    <GlobalFooter />
  </main>
</template>

<script setup lang="ts">
import GlobalHeader from '@/containers/GlobalHeader.vue';
import GlobalFooter from '@/containers/GlobalFooter.vue';
import ItemDetail from '@/components/home/ItemDetail.vue';
import Loading from '@/components/Loading.vue';

import type { Item } from '@/types/app';
import { useItem } from '@/composables/useItem';
import { useAuth } from '@/composables/useAuth';

const route = useRoute();
const id = route.params.id as string;
const uitem = useItem();
const cart = useCart();
const auth = useAuth();
const currentItem = ref<Item | null>(null);
const addItem = (i: Item) => {
  cart.addCart(i);
};
const visibleDetail = computed(() => {
  return currentItem.value !== null && !uitem.isLoading;
});

onMounted(async () => {
  const item = await uitem.fetchItem(parseInt(id, 10));
  if (item) {
    currentItem.value = item;
  }
});
</script>

<style scoped lang="css">
@import '@/assets/css/_vue.css';

.PageItemDetail__Loading {
  --loading-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100%;
}
.PageItemDetail__Body {
  padding: var(--space-64) 0 var(--space-64);
}
</style>
