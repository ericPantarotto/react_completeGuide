import { createContext } from 'react';

export const ProductsContext = createContext({
  products: [],
  toggleFav: (id) => console.info(id),
});
