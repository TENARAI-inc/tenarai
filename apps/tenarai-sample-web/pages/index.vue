<template>
  <main class="PageHome">
    <GlobalHeader />
    <section class="PageHome__SectionHead">
      <h1>Tenarai Sample Web</h1>
      <p>Welcome to the Tenarai Sample Web!</p>
    </section>
    <section class="PageHome__SectionList">
      <!-- Loading -->
      <div v-if="!visibleList" class="PageHome__Loading">
        <Loading />
      </div>
      <!-- リスト -->
      <Transition name="fade">
        <ItemList v-if="visibleList" :items="uitem.items" />
      </Transition>
    </section>
    <section class="PageHome__SectionInfo">
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
import GlobalHeader from '@/containers/GlobalHeader.vue';
import GlobalFooter from '@/containers/GlobalFooter.vue';
import ItemList from '@/components/home/ItemList.vue';
import Loading from '@/components/Loading.vue';
import { useItem } from '@/composables/useItem';

const uitem = useItem();
const visibleList = computed(() => {
  return uitem.items.length > 0 && !uitem.isLoading;
});

onMounted(async () => {
  await uitem.fetchItems();
});
</script>

<style scoped lang="css">
@import '@/assets/css/_vue.css';

.PageHome {
  --loading-size: 40px;
}
.PageHome__SectionHead {
  text-align: center;
  padding: var(--space-64) 0;
  font-size: var(--font-size-18);

  h1 {
    font-size: var(--font-size-32);
    margin-bottom: var(--space-16);
  }
}
.PageHome__Loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100%;
}
.PageHome__SectionList {
  padding: 0 0 var(--space-64);
}
.PageHome__SectionInfo {
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
