import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Addbook from '../pages/Addbook';
import RegisterForm from '../components/RegisterForm';
import LogInFrom from '../components/LogInFrom';
import Edit from '../pages/Edit';
import { Wishlist } from '../pages/Wishlist';
import Books from '../pages/Books';

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
        element: <Books />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/addbook',
        element: <Addbook />,
      },
      {
        path: '/editbook/:id',
        element: <Edit/>,
      },
      {
        path: '/signup',
        element: <RegisterForm/>
      },
      {
        path: '/login',
        element: <LogInFrom />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
    ],
  },
  
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
