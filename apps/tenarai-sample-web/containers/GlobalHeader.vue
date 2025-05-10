<template>
  <GlobalHeader
    :loginUser="auth.loginUser"
    :isLogined="auth.isLogined"
    :cartItems="cart.cartItems"
    :notification="store.notification"
    @close="cart.showCart(false)"
    @login="auth.setLogin(true)"
    @logout="logout"
    @toggleCart="toggleCart"
  />
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue';
import { useCart } from '@/composables/useCart';
import { useStore } from '@/composables/useStore';
import { useAuth } from '@/composables/useAuth';

const router = useRouter();
const store = useStore();
const auth = useAuth();
const cart = useCart();

const logout = () => {
  auth.logout();
  router.push('/');
};
const toggleCart = () => {
  cart.showCart(!cart.visibleCart);
};
</script>
