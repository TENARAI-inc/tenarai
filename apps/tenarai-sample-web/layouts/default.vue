<template>
  <div>
    <slot />
    <Cart />
  </div>
</template>

<script setup lang="ts">
import Cart from '@/containers/Cart.vue';
</script>
