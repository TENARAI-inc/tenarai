import { defineStore } from 'pinia';
import type { Item } from '@/types/app';

export type Notification = {
  count: number;
};

export const useItem = defineStore(
  'item',
  () => {
    const isLoading = ref(false);
    const items = ref<Item[]>([]);
    const fetchItems = async () => {
      try {
        isLoading.value = true;
        const res = await $fetch('/api/items/');
        items.value = res as Item[];
        isLoading.value = false;
        return res;
      } catch (error) {
        return null;
      }
    };
    const fetchItem = async (id: number) => {
      try {
        isLoading.value = true;
        const res = await $fetch(`/api/items/${id}`);
        isLoading.value = false;
        return res as Item;
      } catch (error) {
        return null;
      }
    };

    return { fetchItems, fetchItem, items, isLoading };
  },
  {
    persist: true,
  }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useItem, import.meta.hot));
}
