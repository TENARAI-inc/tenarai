<template>
  <article class="ItemDetail">
    <div class="ItemDetail__Image">
      <img
        class="ItemOne__Img"
        src="https://fakeimg.pl/640x360/cccccc/fff?text=001.png"
        alt=""
      />
    </div>
    <div class="ItemDetail__Body">
      <h1>アイテム詳細</h1>
      <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
      <Button label="カートに追加" />
    </div>
  </article>
</template>

<script setup lang="ts">
  import Button from '@/components/Button.vue';
</script>

<style scoped>
  @import '~/assets/css/_vue.css';

  .ItemDetail {
    display: flex;
    width: 80%;
    margin: 0 auto;
  }

  .ItemDetail__Body {
    padding-left: var(--space-32);
  }
</style>
