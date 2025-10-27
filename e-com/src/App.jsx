import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Contact from "./Contact";
import DynamicContent from "./DynamicContent";
import SellerRegister from "./SellerRegister";
import SellerLogin from "./SellerLogin";
import SellerDashboard from "./SellerDashboard";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import CameraTest from "./CameraTest";

import { CartProvider } from "./CartContext";
import CartPage from "./CartPage";
import OrderPage from "./OrderPage";
import LandingPage from "./LandingPage"; // <-- import the landing page component

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/landingPage",
      element: <LandingPage />,
    },
    {
      path: "/products",
      element: <DynamicContent />,
    },
    {
      path: "/cart",
      element: <CartPage /> 
    },
    {
      path: "/contactus",
      element: <Contact />
    },
    {
      path: "/orders",
      element: <OrderPage />
    },
    {
      path: "/seller-register",
      element: <SellerRegister />
    },
    {
      path: "/seller-login",
      element: <SellerLogin />
    },
    {
      path: "/seller-dashboard",
      element: <SellerDashboard />
    },
    {
      path: "/admin-login",
      element: <AdminLogin />
    },
    {
      path: "/admin-dashboard",
      element: <AdminDashboard />
    },
    {
      path: "/camera-test",
      element: <CameraTest />
    },
  ]);




  return (
    <>
     <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
      
    </>
  )
}

export default App
