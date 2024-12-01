import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { combineReducers, createStore } from 'redux';
import App from './App.jsx';
import './index.css';
// import productReducer from './store/reducers/products';

// NOTE: REDUX
// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = createStore(rootReducer);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </StrictMode>
// );

// NOTE: useContext()

// import ProductsProvider from './context/product-ctx-provider.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ProductsProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ProductsProvider>
//   </StrictMode>
// );

import configureProductsStore from './hooks-store/products-store';
import configureCounterStore from './hooks-store/counter-store';

configureProductsStore();
configureCounterStore();

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
