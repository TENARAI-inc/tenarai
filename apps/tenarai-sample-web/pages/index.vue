<template>
  <article>
    <GlobalHeader />
    <main>
      <SectionHead />
      <SectionSummary />
    </main>

    <GlobalFooter />
    <SectionAccess />
  </article>
</template>

<script setup lang="ts">
  import GlobalHeader from '~/components/GlobalHeader.vue';
  import GlobalFooter from '~/components/GlobalFooter.vue';
  // import SectionHead from '~/components/home/SectionHead.vue';
  // import SectionSummary from '~/components/home/SectionSummary.vue';
  // import SectionAccess from '~/components/home/SectionAccess.vue';

  // definePageMeta({ layout: 'home' });
</script>

<style scoped lang="css">
  @import '~/assets/css/_vue.css';

  main {
    background-color: white;
  }

  /* @media (--sp) {
  h1 {
    font-size: 32px;
    color: red;
  }
} */
</style>
