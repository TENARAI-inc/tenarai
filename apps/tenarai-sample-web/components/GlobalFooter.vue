<template>
  <footer>
    <div>
      <Logo class="Logo" />
    </div>
    <div class="Achievements">
      <p>指導セッション30,000超</p>
      <p>未経験者からアスリートまで 圧倒的な指導実績</p>
    </div>

    <div class="Info">
      <ul class="Buttons">
        <li>
          <a class="Button" href="/">セッション予約</a>
        </li>
        <li>
          <a class="Button" href="/">プログラム購入</a>
        </li>
        <li>
          <a class="Button" href="/">メール</a>
        </li>
        <li>
          <a class="Button" href="/">080-4199-3150</a>
        </li>
      </ul>
    </div>

    <ul class="Links">
      <li>
        <NuxtLink class="Link" to="/privacypolicy">
          プライバシーポリシー
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="Link" to="/tokushoho">
          特定商取引法に基づく表記
        </NuxtLink>
      </li>
    </ul>
    <p class="Open">
      営業時間
      <br />
      &emsp;平日: 10:00〜20:00
      <br />
      土日祝: 10:00〜20:00
    </p>
  </footer>
</template>

<script setup lang="ts">
  import Logo from '~/components/Logo.vue';
</script>

<style scoped>
  @import '~/assets/css/_vue.css';

  footer {
    position: relative;
    color: white;
    font-size: 16px;
    padding: calc(var(--unit) * 8) calc(var(--unit) * 6);
    background-color: var(--color-gray);
  }
  .Logo {
    display: block;
    width: 300px;
    margin: 0 auto;
  }
  .Body {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
  .Info {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: calc(var(--unit) * 8);
  }
  .Links {
    text-align: center;
    margin-top: calc(var(--unit) * 6);
  }
  .Links li + li {
    margin-top: calc(var(--unit) * 1);
  }
  .Buttons {
    display: flex;
  }
  .Buttons li a {
    display: inline-block;
  }
  .Buttons li + li {
    margin-left: calc(var(--unit) * 2);
  }
  .Open {
    text-align: center;
    margin-top: calc(var(--unit) * 4);
  }
  .Achievements {
    margin-top: calc(var(--unit) * 4);
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  @media (--sp) {
    footer {
      font-size: 14px;
      padding: calc(var(--unit) * 4) calc(var(--unit) * 4);
    }
    .Logo {
      width: 180px;
    }
    .Achievements {
      font-size: 18px;
      margin-top: calc(var(--unit) * 2);
    }
    .Info {
      display: block;
      margin-top: calc(var(--unit) * 4);
    }
    .Links {
      margin-top: calc(var(--unit) * 2);
    }
    .Buttons {
      display: block;
    }
    .Buttons li + li {
      margin: calc(var(--unit) * 2) 0;
    }
    .Open {
      margin-top: calc(var(--unit) * 2);
    }
  }
</style>
