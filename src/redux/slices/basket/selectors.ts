import { RootState } from "../../store";

export const selectBasket = (state: RootState) => state.basket;
export const selectBasketItemById = (id: string) => (state: RootState) =>
  state.basket.items.find((obj) => obj.id === id);