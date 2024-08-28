import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: (_) => _,
  updatedItemQuantity: (_) => _,
});
