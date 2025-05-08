<template>
  <article class="ItemDetail">
    <ul class="ItemDetail__Breadcrumb">
      <li>
        <NuxtLink class="Link" to="/">一覧</NuxtLink>
      </li>
      <li>/</li>
      <li>
        <NuxtLink class="Link -disabled" to="">アイテム名</NuxtLink>
      </li>
    </ul>
    <div class="ItemDetail__Body">
      <div class="ItemDetail__Image">
        <img src="https://fakeimg.pl/640x360/cccccc/fff?text=001.png" alt="" />
      </div>
      <div class="ItemDetail__Info">
        <h1 class="ItemDetail__ItemTitle">アイテム詳細</h1>
        <p class="ItemDetail__ItemPrice">4500円</p>
        <p class="ItemDetail__ItemDes">
          説明文が入ります。説明文が入ります。説明文が入ります。
        </p>
        <Button label="カートに追加" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
  import Button from '@/components/Button.vue';
</script>

<style scoped>
  @import '~/assets/css/_vue.css';

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
    margin-bottom: var(--space-16);
  }
</style>
