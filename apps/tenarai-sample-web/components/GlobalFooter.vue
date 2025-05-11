<template>
  <footer>
    <div>
      <Logo class="Logo" />
    </div>

    <ul class="Links">
      <li>
        <NuxtLink class="Link" to="/privacypolicy">
          プライバシーポリシー
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="Link" to="/toiawase">お問い合わせ</NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue';
</script>

<style scoped>
@import '@/assets/css/_vue.css';

footer {
  position: relative;
  color: #666;
  font-size: var(--font-size-16);
  padding: var(--space-64) var(--space-48);
  background-color: #eeeeee;
  background-image: url('/imgs/patterns/dark-tire.png');
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
  margin-top: var(--space-64);
}
.Links {
  text-align: center;
  margin-top: var(--space-48);
}
.Links li + li {
  margin-top: var(--space-8);
}
.Buttons {
  display: flex;
}
.Buttons li a {
  display: inline-block;
}
.Buttons li + li {
  margin-left: var(--space-16);
}
.Open {
  text-align: center;
  margin-top: var(--space-32);
}
.Achievements {
  margin-top: var(--space-32);
  text-align: center;
  font-size: var(--font-size-24);
  font-weight: bold;
}

@media (--tablet) {
  footer {
    font-size: var(--font-size-14);
    padding: var(--space-64) 0;
  }
  .Logo {
    width: 180px;
  }
  .Achievements {
    font-size: var(--font-size-18);
    margin-top: var(--space-16);
  }
  .Info {
    display: block;
    margin-top: var(--space-32);
  }
  .Links {
    margin-top: var(--space-16);
  }
  .Buttons {
    display: block;
  }
  .Buttons li + li {
    margin: var(--space-16) 0;
  }
  .Open {
    margin-top: var(--space-16);
  }
}
</style>
