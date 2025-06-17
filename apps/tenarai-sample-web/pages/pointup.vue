<template>
  <main class="PagePointup">
    <GlobalHeader />
    <div class="PagePointup__Body">
      <section class="PagePointup__SectionHead">
        <h1>ポイントアップキャンペーン</h1>
        <div class="PagePointup__SectionHeadInfo">
          <p>はじめてのお買い物でポイントアップ!</p>
        </div>
      </section>
      <section>
        <ul class="PagePointup__ItemList">
          <li>
            <CampaignItem
              title="４人用テント リディアン"
              img="/imgs/curriculum/campaign-item01.png"
              point="20"
            />
          </li>
          <li>
            <CampaignItem
              title="ソロテント イオニアン"
              img="/imgs/curriculum/campaign-item02.png"
              point="60"
            />
          </li>
          <li>
            <CampaignItem
              title="7人用テント ロクリアン"
              img="/imgs/curriculum/campaign-item03.png"
              point="90"
            />
          </li>
        </ul>
      </section>
      <section class="PagePointup__SectionInfo">
        <h2>キャンペーンの詳細</h2>
        <p>
          このキャンペーンは、はじめてのお買い物を対象にポイントアップを行います。
        </p>
        <p>
          キャンペーン期間中に対象商品を購入すると、通常のポイントに加えて特別なポイントが付与されます。
          <br />
          詳細は、各商品ページをご確認ください。
        </p>
        <h2>キャンペーンコード</h2>
        <p>
          キャンペーンコードを入力すると、さらに特典が得られます。
          <br />
          コードは、キャンペーンページやメールで配布されます。
        </p>
        <div>
          <p>メールでキャンペーンコードを受け取る</p>

          <input type="email" placeholder="メールアドレスを入力してください" />

          <button type="button">確認</button>
        </div>
      </section>
      <section class="PagePointup__SectionCode"></section>
    </div>
    <GlobalFooter />
  </main>
</template>

<script setup lang="ts">
import GlobalHeader from '@/containers/GlobalHeader.vue';
import GlobalFooter from '@/containers/GlobalFooter.vue';
import ItemList from '@/components/home/ItemList.vue';
import Loading from '@/components/Loading.vue';
import CampaignItem from '@/components/curriculum/CampaignItem.vue';
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

.PagePointup {
}
.PagePointup__Body {
  background-color: #fff0e0;
}
.PagePointup__SectionHead {
  font-size: var(--font-size-18);
  background-color: #ccc;
  padding: var(--space-64) var(--space-32) calc(var(--space-64) * 4);
  background-image: url('/imgs/curriculum/kanto-camping-site_thumb.webp');
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  color: var(--color-white);

  h1 {
    display: inline-block;
    font-size: var(--font-size-40);
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: var(--space-16);
    padding: var(--space-16) var(--space-32);
    background-color: #20cdf4e5;
  }
}
.PagePointup__SectionHeadInfo {
  p {
    display: inline-block;
    font-size: var(--font-size-24);
    color: var(--color-gray-800);
    margin-top: var(--space-8);
    padding: var(--space-4) var(--space-16);
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
}
.PagePointup__ItemList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-16);
  padding: var(--space-16) 0;
  margin-top: calc(var(--space-64) * -2);
}
.PagePointup__SectionInfo {
  text-align: center;
  padding: var(--space-24) var(--space-32) 0;
  height: 600px;

  h2 {
    font-size: var(--font-size-32);
    margin: var(--space-64) 0 var(--space-32);
  }

  p {
    font-size: var(--font-size-18);
    margin-bottom: var(--space-16);
  }
}

@media (--tablet) {
  .PagePointup__SectionInfo {
    h2 {
      font-size: var(--font-size-24);
    }
  }
}
</style>
