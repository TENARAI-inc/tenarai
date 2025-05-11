import type { Item } from '@/types/app';

export const useCart = defineStore(
  'cart',
  () => {
    const visibleCart = ref(false);
    const showCart = (flg: boolean) => {
      visibleCart.value = flg;
    };

    const cartItems = ref<Item[]>([]);
    const addCart = (item: Item) => {
      cartItems.value.unshift(item);
    };
    const deleteItem = (item: Item) => {
      cartItems.value = cartItems.value.filter((i) => i.id !== item.id);
    };
    const isCartAdded = (item: Item) => {
      return !!cartItems.value.find((i) => i.id === item.id);
    };

    return {
      cartItems,
      addCart,
      deleteItem,
      visibleCart,
      showCart,
      isCartAdded,
    };
  },
  {
    persist: true,
  }
);
