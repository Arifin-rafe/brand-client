import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Brands from './components/Brands/Brands';
import MainLayout from './components/MainLayout/MainLayout';
import Error from './components/Error/Error';
import AddProduct from './components/AddProduct/AddProduct';
import MyCart from './components/MyCart/MyCart';
import AddBrand from './components/AddBrand/AddBrand';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Brands></Brands>,
        loader: () => fetch('https://brand-server-i2zlx5cg3-arifin-rafe.vercel.app/brands')
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>,
        loader: () => fetch('https://brand-server-i2zlx5cg3-arifin-rafe.vercel.app/cart')
      },
      {
        path: '/addBrand',
        element: <AddBrand></AddBrand>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`https://brand-server-i2zlx5cg3-arifin-rafe.vercel.app/productDetails/${params.id}`)
      },
      {
        path: '/productsCard/:brandName',
        element: <Products></Products>,
        loader: ({ params }) => fetch(`https://brand-server-i2zlx5cg3-arifin-rafe.vercel.app/products/${params.brandName}`)
      },
      {
        path: '/products/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`https://brand-server-i2zlx5cg3-arifin-rafe.vercel.app/products/${params.id}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
