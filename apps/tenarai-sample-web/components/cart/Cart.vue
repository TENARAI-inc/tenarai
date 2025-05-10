<template>
  <aside class="Cart" :class="{ '-open': openFlg }" @click.prevent="onClickBG">
    <div class="Cart__Body">
      <h2>
        カート
        <span class="Cart__Count">{{ cartItems.length }}点</span>
      </h2>

      <ul class="Cart__List">
        <li
          v-for="(item, index) in cartItems"
          :key="`cartitem-${index}`"
          class="Cart__Item"
        >
          <CartItem
            :cart-item="item"
            @delete="(item) => emit('deleteItem', item)"
          />
        </li>
      </ul>

      <div>
        <Button label="お支払いへ進む" @click.prevent.stop="close" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { addHtmlClass, removeHtmlClass } from '@/utils/app';
import { useKeyDown } from '@/composables/useKeyDown';
import type { Item } from '@/types/app';
import CartItem from '@/components/cart/CartItem.vue';

const emit = defineEmits(['close', 'deleteItem']);
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  cartItems: {
    type: Array as PropType<Item[]>,
    required: true,
  },
});

useKeyDown({
  onEscape: () => {
    close();
  },
});

const openFlg = ref(false);
const close = () => {
  emit('close');
};
const onClickBG = (e: Event) => {
  const target = e.target as HTMLElement | null;
  if (target?.classList.contains('Cart')) {
    close();
  }
};

watch(props, (p) => {
  openFlg.value = p.open;
  if (openFlg.value) {
    addHtmlClass('-noscroll');
  } else {
    removeHtmlClass('-noscroll');
  }
});
</script>

<style scoped>
@import '@/assets/css/_vue.css';

.Cart {
  width: 100svw;
  height: calc(100svh - var(--header-height));
  background-color: transparent;
  border: none;
  pointer-events: none;
  transition: all 0.4s ease;

  position: fixed;
  top: var(--header-height);
  left: 0;
  z-index: var(--z-cart);

  &.-open {
    background-color: rgba(0, 0, 0, 0.2);
    pointer-events: auto;

    .Cart__Body {
      right: 0;
    }
  }
}
.Cart__Body {
  --cart-width: 400px;
  width: var(--cart-width);
  height: 100%;
  background-color: var(--dialog-bg-color);
  padding: var(--space-32);
  overflow: scroll;

  position: absolute;
  top: 0;
  right: calc(var(--cart-width) * -1);
  transition: all 0.3s ease;
}
.Cart__List {
  padding: var(--space-16) 0;
}
.Cart__Item {
  margin-bottom: var(--space-8);
}
</style>
