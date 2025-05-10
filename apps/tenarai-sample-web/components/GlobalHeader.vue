<template>
  <header class="Header">
    <!-- 左側 -->
    <NuxtLink class="Header__Logo" to="/">
      <Logo />
      <span>Tenarai Sample Web</span>
    </NuxtLink>
    <!-- 右側 -->
    <menu ref="menuRef" class="Header__Menu">
      <li>
        <NuxtLink to="/">トップ</NuxtLink>
      </li>
      <li v-if="isLogined" class="Header__MenuCart">
        <NuxtLink @click.stop.prevent="emit('toggleCart')">
          <IconCart />
          カート
          <span class="ColorCircle">{{ cartItems.length }}</span>
        </NuxtLink>
      </li>
      <li v-if="isLogined" class="Header__MenuUser">
        <NuxtLink to="/mypage">
          {{ loginUser?.name }}
          <IconEnvelope />
          <span class="ColorCircle">
            {{ notification.count }}
          </span>
        </NuxtLink>
      </li>
      <li v-if="isLogined" class="Header__MenuLogin">
        <a @click.stop.prevent="logoutOpen = true">ログアウト</a>
      </li>
      <li v-else class="Header__MenuLogin">
        <a @click.stop.prevent="loginOpen = true">ログイン</a>
      </li>
    </menu>
    <!-- ログインダイアログ -->
    <DialogLogin
      :open="loginOpen"
      @close="loginOpen = false"
      @login="(flg) => emit('login', flg)"
    />
    <!-- ログアウトダイアログ -->
    <DialogConfirm
      title="ログアウト"
      :open="logoutOpen"
      @close="logoutOpen = false"
    >
      <template #default="{ close }">
        <div class="DialogConfirm__Body">
          <p>ログアウトしますか？</p>
          <div class="DialogConfirm__Bottom">
            <Button label="キャンセル" @click.prevent.stop="close" />
            <Button label="ログアウト" color @click.prevent.stop="logout" />
          </div>
        </div>
      </template>
    </DialogConfirm>
  </header>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import Logo from '@/components/Logo.vue';
import IconCart from '@/components/icons/IconCart.vue';
import IconEnvelope from '@/components/icons/IconEnvelope.vue';
import DialogLogin from '@/components/DialogLogin.vue';
import type { Item } from '@/types/app';
import type { Notification } from '@/composables/useStore';
import type { User } from '@/composables/useAuth';

const emit = defineEmits([
  'login',
  'logout',
  'openLogout',
  'openLogin',
  'toggleCart',
]);
const props = defineProps({
  loginUser: {
    type: Object as PropType<User | null>,
    required: true,
  },
  cartItems: {
    type: Array as PropType<Item[]>,
    required: true,
  },
  notification: {
    type: Object as PropType<Notification>,
    required: true,
  },
});
const isLogined = computed(() => props.loginUser !== null);

const loginOpen = ref(false);
const logoutOpen = ref(false);
const logout = () => {
  emit('logout');
  logoutOpen.value = false;
};
</script>

<style scoped>
@import '@/assets/css/_vue.css';

.Header {
  --circle-size: 24px;

  position: relative;
  display: flex;
  align-items: center;
  padding: calc(var(--unit) * 2) calc(var(--unit) * 4);
  height: var(--header-height);

  position: sticky;
  top: 0;
  z-index: var(--z-header);
  background-color: #fff;
  box-shadow: var(--shadow);
}
.Header__Logo {
  display: flex;
  align-items: center;

  span {
    font-size: 24px;
    font-weight: bold;
    margin-left: calc(var(--unit) * 2);
  }
  &:deep(img) {
    max-width: 40px;
  }
}
.Header__Menu {
  display: flex;
  margin: 0 0 0 auto;

  a {
    vertical-align: middle;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  svg {
    vertical-align: -5px;
  }

  li + li {
    margin-left: calc(var(--unit) * 3);
  }
}
.Header__MenuUser {
  vertical-align: middle;
}
.DialogConfirm__Bottom {
  margin-top: var(--space-32);
  button + button {
    margin-left: var(--space-32);
  }
}
.ColorCircle {
  display: inline-block;
  background-color: var(--color-action);
  color: white;
  width: var(--circle-size);
  height: var(--circle-size);
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
  padding: var(--space-4);
  margin-left: var(--space-4);
  vertical-align: 2px;
  line-height: 1.4;
}
</style>
