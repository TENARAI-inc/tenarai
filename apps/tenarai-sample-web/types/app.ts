export type ItemImg = {
  id: string;
  itemId: string;
  url: string;
  createdAt: string;
};

export type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
  createdAt: string;
  itemimg: ItemImg[];
};
