import { defineStore } from 'pinia';
import type { Item } from '@/types/app';

type User = {
  id: string;
  name: string;
  email: string;
  iconUrl: string;
};

const dummuyUser: User = {
  id: '999',
  name: 'ジョン・ドゥ',
  email: 'jon.doh@sample.com',
  iconUrl: '/imgs/chara_hanage.svg',
};

export const useStore = defineStore(
  'appstore',
  () => {
    /**
     * login user
     */
    const loginUser = ref<User | null>(null);
    const isLogined = computed(() => {
      return loginUser.value !== null;
    });
    const setLogin = (flg: boolean) => {
      if (flg) {
        loginUser.value = { ...dummuyUser };
      } else {
        loginUser.value = null;
      }
    };

    /**
     * cart
     */
    const cartItems = ref<Item[]>([]);
    const addCart = (item: Item) => {
      cartItems.value.push(item);
    };

    /**
     * notification
     */
    const notification = ref({
      count: 5,
    });

    return { loginUser, isLogined, setLogin, cartItems, addCart, notification };
  },
  {
    persist: true,
  }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
