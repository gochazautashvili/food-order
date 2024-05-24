export type ProductType = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
};

export type CartPropsType = {
  id: number;
  productId: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};
