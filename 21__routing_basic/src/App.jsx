import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import HomePage from './pages/HomeProg';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

// NOTE: relative paths
const router = createBrowserRouter([
  {
    path: '/root',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index:true, element: <HomePage /> },
      // { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
    ],
  },
]);

// // NOTE: absolute paths
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: '/', element: <HomePage /> },
//       { path: '/products', element: <ProductsPage /> },
//       { path: '/products/:productId', element: <ProductDetailPage /> },
//     ],
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// Alternative way of defining routes
// import { createRoutesFromElements, Route } from 'react-router-dom';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);