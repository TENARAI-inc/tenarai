<template>
  <main>
    <GlobalHeader />
    <!-- SectionHead -->
    <section class="SectionHead">
      <h1>Tenarai Sample Web</h1>
      <p>Welcome to the Tenarai Sample Web!</p>
    </section>
    <!-- SectionList -->
    <section class="SectionList">
      <ItemList />
    </section>
    <!-- SectionInfo -->
    <section class="SectionInfo">
      <h2>お知らせ</h2>
      <p>お知らせが入ります。</p>
      <p>
        お知らせが入ります。お知らせが入ります。お知らせが入ります。
        <br />
        お知らせが入ります。お知らせが入ります。
        <br />
        お知らせが入ります。お知らせが入ります。
      </p>
    </section>
    <GlobalFooter />
  </main>
</template>

<script setup lang="ts">
  import GlobalHeader from '@/components/GlobalHeader.vue';
  import GlobalFooter from '@/components/GlobalFooter.vue';
  import ItemList from '@/components/home/ItemList.vue';
</script>

<style scoped lang="css">
  @import '~/assets/css/_vue.css';

  .SectionHead {
    text-align: center;
    padding: var(--space-64) 0;
    font-size: var(--font-size-18);

    h1 {
      font-size: var(--font-size-32);
      margin-bottom: var(--space-16);
    }
  }
  .SectionList {
    padding: 0 0 var(--space-64);
  }
  .SectionInfo {
    text-align: center;
    background-color: #333;
    color: white;
    padding: var(--space-64) var(--space-32);
    height: 600px;

    h2 {
      font-size: var(--font-size-32);
      margin-bottom: var(--space-32);
    }

    p {
      font-size: var(--font-size-18);
      margin-bottom: var(--space-16);
    }
  }
</style>
