export type User = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
};

export type Item = {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
};

export type ItemImg = {
  id: number;
  url: string;
  createdAt: Date;
};
