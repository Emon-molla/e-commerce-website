import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import SinglePage from './pages/single page/SinglePage.jsx';
import ViewProduct from './pages/view product/ViewProduct.jsx';
import SignUp from './pages/sign up/SignUp.jsx';
import SignIn from './pages/sign in/SignIn.jsx';
import Cart from './pages/cart page/Cart.jsx';
import Order from './pages/order page/Order.jsx';
import { Provider } from 'react-redux';
import store from './store/index.js';
const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <Home /> },
      { path: "/singlePage/:id", element: <SinglePage /> },
      { path: "/viewpage", element: <ViewProduct /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order", element: <Order /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
