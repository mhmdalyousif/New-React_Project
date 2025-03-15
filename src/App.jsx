import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from "./components/Product";  // ✅ fix it 
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from './pages/Cart';
import { productsdata } from './api/api';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsdata
      },
      {
        path: "product/:id",
        element: <product/>
      },
      {
        path: "/cart",  // ✅ Ensure the path is correctly formatted (lowercase "cart")
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
