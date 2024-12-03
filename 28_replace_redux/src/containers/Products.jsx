// import { useSelector } from 'react-redux';
// import { useContext } from 'react';
import ProductItem from '../components/Products/ProductItem';
// import { ProductsContext } from '../context/product-context';
import './Products.css';

// NOTE: Redux then useContext()
// const Products = () => {
//   // const productList = useSelector((state) => state.shop.products);
//   const productList = useContext(ProductsContext).products ?? [];

//   return (
//     <ul className='products-list'>
//       {productList.map((prod) => (
//         <ProductItem
//           key={prod.id}
//           id={prod.id}
//           title={prod.title}
//           description={prod.description}
//           isFav={prod.isFavorite}
//         />
//       ))}
//     </ul>
//   );
// };

import { useStore } from '../hooks-store/store';

const Products = () => {
  const state = useStore()[0];
  
  return (
    <ul className='products-list'>
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;