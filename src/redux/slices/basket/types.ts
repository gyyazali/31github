export type BasketItem = {
  id: string;
  title: string;
  imageUrl: string;
  type: string;
  price: number;
  size: number;
  count: number;
};

export interface BasketSliceState {
  totalPrice: number;
  items: BasketItem[];
}
