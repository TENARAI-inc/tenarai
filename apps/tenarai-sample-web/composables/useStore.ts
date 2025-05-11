import { defineStore } from 'pinia';

export type Notification = {
  count: number;
};

export const useStore = defineStore(
  'appstore',
  () => {
    const notification = ref<Notification>({
      count: 3,
    });

    return { notification };
  },
  {
    persist: true,
  }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
