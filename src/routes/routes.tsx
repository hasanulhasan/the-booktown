import { createBrowserRouter } from 'react-router-dom';
// import App from '@/App';
// import Login from '@/pages/Login';
// import NotFound from '@/pages/NotFound';
// import Home from '@/pages/Home';
// import Products from '@/pages/Products';
// import Checkout from '@/pages/Checkout';
// import Signup from '@/pages/Signup';
// import ProductDetails from '@/pages/ProductDetails';
import Login from '../pages/Login';
import App from '../App';
import NotFound from '../pages/NotFound';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Addbook from '../pages/Addbook';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/addbook',
        element: <Addbook />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;