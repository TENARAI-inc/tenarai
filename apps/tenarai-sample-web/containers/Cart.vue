<template>
  <Cart
    :open="cart.visibleCart"
    :cartItems="cart.cartItems"
    @close="cart.showCart(false)"
    @deleteItem="(item) => cart.deleteItem(item)"
  />
</template>

<script setup lang="ts">
import Cart from '@/components/cart/Cart.vue';
import { useCart } from '@/composables/useCart';

const cart = useCart();
</script>
