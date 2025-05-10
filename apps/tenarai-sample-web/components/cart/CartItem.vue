<template>
  <div class="CartItem" :class="{ '--delete': deleting }">
    <p class="CartItem__Name">{{ cartItem.name }}</p>
    <p class="CartItem__Price">{{ dispPrice(cartItem.price) }}</p>
    <p class="CartItem__Des">{{ cartItem.description }}</p>
    <div class="CartItem__Bottom">
      <a class="Link" @click.stop.prevent="deleting = true">削除</a>
    </div>
    <!-- 削除しますか？  -->
    <div v-if="deleting" class="CartItem__Delete">
      <div>
        <p>削除しますか？</p>
        <div class="CartItem__DeleteBottom">
          <button @click.stop.prevent="deleting = false">キャンセル</button>
          <button
            @click.stop.prevent="
              () => {
                deleting = false;
                emit('delete', cartItem);
              }
            "
          >
            削除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dispPrice } from '@/utils/display';
import type { Item } from '@/types/app';

const emit = defineEmits(['delete']);
defineProps({
  cartItem: {
    type: Object as PropType<Item>,
    required: true,
  },
});
const deleting = ref(false);
</script>

<style scoped>
@import '@/assets/css/_vue.css';

.CartItem {
  position: relative;
  background-color: #eee;
  padding: var(--space-8) var(--space-16);
  margin-bottom: var(--space-8);
  border-radius: var(--border-radius);
  overflow: hidden;
}
.CartItem {
  font-size: var(--font-size-16);
  margin-bottom: var(--space-8);
}
.CartItem__Price {
  font-size: var(--font-size-16);
  color: var(--color-action);
  margin-bottom: var(--space-8);
}
.CartItem__Des {
  font-size: var(--font-size-14);
  color: var(--color-text);
}
.CartItem__Bottom {
  text-align: right;
  font-size: var(--font-size-12);
}
.CartItem__Delete {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  position: absolute;
  border: solid 1px #ccc;
  border-radius: var(--border-radius);

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
}
.CartItem__DeleteBottom {
  margin-top: var(--space-16);
  button + button {
    margin-left: var(--space-16);
  }
}
</style>
