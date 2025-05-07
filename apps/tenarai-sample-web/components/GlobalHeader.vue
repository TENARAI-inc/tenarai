<template>
  <header class="Header">
    <div class="Logo">
      <NuxtLink to="/">
        <Logo class="Logo__Logo" />
      </NuxtLink>
    </div>

    <menu ref="menuRef" class="Menu">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/trainer">トレーナー紹介</NuxtLink></li>
      <li><NuxtLink to="/contact">問い合わせ</NuxtLink></li>
      <li>
        <NuxtLink to="/booking">
          <IconStand class="ButtonIcon" />
          予約する
        </NuxtLink>
      </li>
      <li><NuxtLink to="/">トレーニングプログラム作成</NuxtLink></li>
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
    /* background-image: url("/imgs/patterns/escheresque.png"); */
  }

  .Logo a {
    display: inline-block;
    vertical-align: calc(var(--unit) * -5.5);
  }

  .Logo__Logo {
    width: 200px;
  }

  .Menu {
    display: flex;
    margin: 0 0 0 auto;
  }

  .Menu li + li {
    margin-left: calc(var(--unit) * 3);
  }

  .ButtonIcon {
    display: inline;
    width: 24px;
    vertical-align: top;
    margin-right: -4px;
  }

  .BtnMenu {
    display: none;
    text-decoration: underline;
    background-color: transparent;
    border: none;
    color: inherit;
    position: absolute;
    top: 60%;
    right: calc(var(--unit) * 2);
    transform: translateY(-50%);
  }

  .IconSwim {
    width: 24px;
  }

  @media (--sp) {
    .Header {
      display: block;
      padding: calc(var(--unit) * 1) calc(var(--unit) * 2);
    }
    .Logo a {
      vertical-align: calc(var(--unit) * -3.5);
    }
    .Logo__Logo {
      width: 140px;
    }
    .Menu {
      display: block;
      position: absolute;
      top: var(--header-height);
      left: 0;
      z-index: 100;
      width: 100%;
      height: calc(100vh - var(--header-height));
      background-color: #eee;
      background: linear-gradient(#eee, #ddd);
      border: solid 6px white;
    }
    .Menu li {
      margin: calc(var(--unit) * 3) calc(var(--unit) * 3);
    }

    .BtnMenu {
      display: block;
    }
  }
</style>
