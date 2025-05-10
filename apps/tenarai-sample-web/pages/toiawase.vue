<template>
  <main class="Toiawase">
    <GlobalHeader />
    <section class="Toiawase__Body">
      <h1>問い合わせ</h1>
      <div>
        <p>
          お問い合わせ窓口の営業時間外におきましては
          <br />
          翌営業日以降の対応とさせていただきます。
          <br />
          お問い合わせの内容によりましては
          <br />
          ご回答にお時間をいただく場合がございます。
        </p>
      </div>
    </section>
    <GlobalFooter />
  </main>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue';
import GlobalFooter from '@/components/GlobalFooter.vue';
</script>

<style scoped lang="css">
@import '~/assets/css/_vue.css';

.Toiawase__Body {
  text-align: center;
  padding: var(--space-64) 0;
  font-size: var(--font-size-18);

  h1 {
    font-size: var(--font-size-32);
    margin-bottom: var(--space-64);
  }
}
</style>
