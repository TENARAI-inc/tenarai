<template>
  <main class="Privacypolicy">
    <GlobalHeader />
    <section class="Privacypolicy__Body">
      <h1>プライバシーポリシー</h1>

      <div class="Privacypolicy__Text">
        <h2>個人情報保護方針について</h2>
        <p>
          当社が事業活動を行う上で、お客様･お取引先関係者などの特定の個人を識別できる情報（以下「個人情報」といいます）を適切に取り扱います。
        </p>
        <h2>個人情報の第三者への開示・提供について</h2>
        <p>
          当社が事業活動を行う上で、お客様･お取引先関係者などの特定の個人を識別できる情報（以下「個人情報」といいます）を適切に取り扱います。
        </p>
      </div>
    </section>
    <GlobalFooter />
  </main>
</template>

<script setup lang="ts">
import GlobalHeader from '@/containers/GlobalHeader.vue';
import GlobalFooter from '@/containers/GlobalFooter.vue';
</script>

<style scoped lang="css">
@import '@/assets/css/_vue.css';

.Privacypolicy__Body {
  text-align: center;
  padding: var(--space-64) 0;
  font-size: var(--font-size-18);

  h1 {
    font-size: var(--font-size-32);
    margin-bottom: var(--space-64);
  }
  h2 {
    font-size: var(--font-size-24);
    font-weight: normal;
    margin: var(--space-32) 0;
  }
  .Privacypolicy__Text {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
    font-size: var(--font-size-16);
  }
}
</style>
