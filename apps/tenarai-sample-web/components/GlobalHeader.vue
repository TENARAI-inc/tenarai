<template>
  <header class="Header">
    <!-- 左側 -->
    <NuxtLink class="Header__Logo" to="/">
      <Logo />
      <span>Tenarai Sample Web</span>
    </NuxtLink>
    <!-- 右側 -->
    <menu ref="menuRef" class="Header__Menu">
      <li>
        <NuxtLink to="/booking"> カート </NuxtLink>
      </li>
      <li><NuxtLink to="/">ログイン</NuxtLink></li>
      <li><NuxtLink to="/contact">問い合わせ</NuxtLink></li>
    </menu>
  </header>
</template>

<script setup lang="ts">
  import Logo from '~/components/Logo.vue';
</script>

<style scoped>
  @import '~/assets/css/_vue.css';

  .Header {
    position: relative;
    display: flex;
    align-items: center;
    padding: calc(var(--unit) * 2) calc(var(--unit) * 4);
    height: var(--header-height);

    position: sticky;
    top: 0;
    z-index: var(--z-header);
    background-color: #fff;
    box-shadow: var(--shadow);
  }

  .Header__Logo {
    display: flex;
    align-items: center;

    span {
      font-size: 24px;
      font-weight: bold;
      margin-left: calc(var(--unit) * 2);
    }
    &:deep(img) {
      max-width: 40px;
    }
  }

  .Header__Menu {
    display: flex;
    margin: 0 0 0 auto;
  }

  .Header__Menu li + li {
    margin-left: calc(var(--unit) * 3);
  }
</style>
