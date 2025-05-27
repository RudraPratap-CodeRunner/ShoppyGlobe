import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

const approuter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/checkout',
        element:<Checkout />
      },
      {
        path:'/productdetail',
        element:<ProductDetail />
      }
    ],
    errorElement:<NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={approuter} />
  </StrictMode>,
)
