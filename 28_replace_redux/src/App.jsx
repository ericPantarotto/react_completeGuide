import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import FavoritesPage from './containers/Favorites';
import ProductsPage from './containers/Products';
import Counter from './containers/Counter';

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route path='/' element={<ProductsPage />} exact />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
        <Counter />
      </main>
    </React.Fragment>
  );
};

export default App;
