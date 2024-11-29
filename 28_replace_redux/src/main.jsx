import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { combineReducers, createStore } from 'redux';
import App from './App.jsx';
import './index.css';
// import productReducer from './store/reducers/products';
import ProductsProvider from './context/product-ctx-provider.jsx';

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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsProvider>
  </StrictMode>
);
