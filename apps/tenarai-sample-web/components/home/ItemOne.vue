<template>
  <div class="ItemOne">
    <NuxtLink class="ItemOne__Link" to="/items/001">
      <img
        class="ItemOne__Img"
        src="https://fakeimg.pl/640x360/cccccc/fff?text=001.png"
        alt=""
      />
    </NuxtLink>
    <div class="ItemOne__text">
      <h2>タイトル</h2>
      <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
    </div>
  </div>
</template>

<style scoped>
  @import '~/assets/css/_vue.css';

  .ItemOne {
    --item-one-width: 320px;
    --item-one-height: 240px;

    width: var(--item-one-width);
    a {
      &:hover {
        img {
          transform: scale(1.05);
        }
      }
    }
  }
  .ItemOne__Link {
    display: block;
    width: var(--item-one-width);
    height: var(--item-one-height);
    overflow: hidden;
    margin-bottom: var(--space-16);
  }
  .ItemOne__Img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);

    transition: all 0.2s ease;
  }
  .ItemOne__text {
    font-size: var(--font-size-16);
  }
</style>
