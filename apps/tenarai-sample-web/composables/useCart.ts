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
      cartItems.value.push(item);
    };
    const deleteItem = (item: Item) => {
      cartItems.value = cartItems.value.filter((i) => i.id !== item.id);
    };

    return { cartItems, addCart, deleteItem, visibleCart, showCart };
  },
  {
    persist: true,
  }
);
