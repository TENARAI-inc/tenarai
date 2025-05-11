export type User = {
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

export const useAuth = defineStore(
  'auth',
  () => {
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
    const logout = () => {
      setLogin(false);
    };

    return {
      loginUser,
      isLogined,
      setLogin,
      logout,
    };
  },
  {
    persist: true,
  }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot));
}
