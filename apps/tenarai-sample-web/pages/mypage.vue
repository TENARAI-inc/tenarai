<template>
  <main class="Mypage">
    <GlobalHeader />
    <section class="Mypage__Body">
      <h1>マイページ</h1>

      <div class="Mypage__Content">
        <h2>
          お知らせが届いています
          <span class="Mypage__NotificationCount">
            （未読 {{ store.notification.count }} 件）
          </span>
        </h2>
        <ul class="Mypage__InfoList">
          <li>
            <a href="">
              ポイント失効のお知らせです。

              <IconArrow />
            </a>
          </li>
          <li>
            <a href="">
              ゴールデンウィークの営業について
              <IconArrow />
            </a>
          </li>
          <li>
            <a href="">
              年末年始の営業について
              <IconArrow />
            </a>
          </li>
        </ul>
        <h2>登録情報</h2>
        <dl class="Mypage__UserInfo">
          <div>
            <dt>住所</dt>
            <dd>〒999-9999&emsp;新潟県手習市大字88</dd>
          </div>
          <div>
            <dt>氏名</dt>
            <dd>手習三郎</dd>
          </div>
          <div>
            <dt>電話番号</dt>
            <dd>080-9999-9999</dd>
          </div>
        </dl>
        <p></p>
        <h2>保有ポイント</h2>
        <p class="Mypage__Point">44444 ポイント</p>
        <p>cart {{ cart.visibleCart }}</p>
      </div>
    </section>
    <GlobalFooter />
  </main>
</template>

<script setup lang="ts">
import GlobalHeader from '@/containers/GlobalHeader.vue';
import GlobalFooter from '@/containers/GlobalFooter.vue';
import IconArrow from '@/components/icons/IconArrow.vue';
import { useStore } from '@/composables/useStore';
import { useCart } from '@/composables/useCart';

const store = useStore();
const cart = useCart();
</script>

<style scoped lang="css">
@import '@/assets/css/_vue.css';

.Mypage__Body {
  text-align: center;
  padding: var(--space-64) 0;
  font-size: var(--font-size-18);

  h1 {
    font-size: var(--font-size-32);
    margin-bottom: var(--space-64);
  }
}
.Mypage__Content {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  font-size: var(--font-size-16);

  h2 {
    font-size: var(--font-size-24);
    font-weight: normal;
    margin: var(--space-64) 0 var(--space-32);
  }
}
.Mypage__NotificationCount {
  color: var(--color-action);
  font-size: var(--font-size-16);
}
.Mypage__InfoList {
  li {
    a {
      display: flex;
      align-items: center;
      background-color: #eee;
      padding: var(--space-16) var(--space-24);
      &:hover {
        background-color: #ddd;
      }
    }

    svg {
      width: 16px;
      height: 16px;
      margin-left: auto;
    }

    margin: var(--space-4) 0;
  }
}
.Mypage__UserInfo {
  & > div {
    display: flex;
    margin: var(--space-8) 0;
  }
  dt {
    width: 100px;
    font-weight: bold;
    text-align: right;
    margin-right: var(--space-16);
  }
}
.Mypage__Point {
  color: var(--color-action);
  font-size: var(--font-size-18);
}
</style>
