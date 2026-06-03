import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import Loading from "./components/Loading";


const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Products = React.lazy(() => import("./pages/Products"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))

import MainLayouts from "./layouts/MainLayouts";

import AuthLayout from "./layouts/AuthLayouts";
import Login from "./pages/auth/Login";

import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";


// VISITOR
import VisitorLayout from "./layouts/VisitorLayout";
const Visitor = React.lazy(() => import("./pages/Visitor"));

function App() {


  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        <Route element={<VisitorLayout />}>
          <Route path="/visitor" element={<Visitor />} />
        </Route>
        
        <Route element={<MainLayouts />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
