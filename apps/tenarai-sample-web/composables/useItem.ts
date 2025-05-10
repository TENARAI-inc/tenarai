import { defineStore } from 'pinia';
import type { Item } from '@/types/app';

export type Notification = {
  count: number;
};

export const useItem = defineStore(
  'item',
  () => {
    const items = ref<Item[]>([]);
    const fetchItems = async () => {
      const { data, error } = await useFetch('/api/items/');
      if (error.value) {
        console.error('Error fetching items:', error.value);
        return null;
      }
      if (data.value) {
        items.value = data.value as Item[];
      }
    };
    const fetchItem = async (id: number) => {
      console.log('fetchItemかいし');
      const { data, error } = await useFetch(`/api/items/${id}`);
      if (error.value) {
        console.error('Error fetching item:', error.value);
        return null;
      }
      if (data.value) {
        return data.value as Item;
      }
      return null;
    };

    return { fetchItems, fetchItem, items };
  },
  {
    persist: true,
  }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useItem, import.meta.hot));
}
