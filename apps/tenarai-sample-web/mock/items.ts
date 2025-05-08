import type { Item, ItemImg } from '@/types/app';

export const genereateItems = () => {
  const items: Item[] = [];
  for (let i = 0; i < 20; i++) {
    const zeroPadId = String(i).padStart(3, '0');
    items.push({
      id: `item${i}`,
      name: `商品名${i}`,
      price: Math.floor(Math.random() * 10000),
      description: `商品説明${i}です。説明文が入ります。説明文が入ります。説明文が入ります。`,
      createdAt: new Date().toISOString(),
      itemimgs: [
        {
          id: `itemimg${i}`,
          itemId: `item${i}`,
          url: `https://fakeimg.pl/640x360/ed5a5a/fff?text=${zeroPadId}.png`,
          createdAt: new Date().toISOString(),
        },
      ],
    });
  }
  return items;
};

export const genereateItemDetail = () => {
  const itemimgs: ItemImg[] = [];
  for (let i = 0; i < 1; i++) {
    const zeroPadId = String(i).padStart(3, '0');
    itemimgs.push({
      id: `itemimg${i}`,
      itemId: `item${i}`,
      url: `https://fakeimg.pl/640x360/ed5a5a/fff?text=${zeroPadId}.png`,
      createdAt: new Date().toISOString(),
    });
  }

  return {
    id: `item999`,
    name: `商品名999`,
    price: Math.floor(Math.random() * 10000),
    description: `商品999です。説明文が入ります。説明文が入ります。説明文が入ります。`,
    createdAt: new Date().toISOString(),
    itemimgs,
  };
};
