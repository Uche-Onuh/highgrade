import React from "react";

import { Routes, Route } from "react-router-dom";

import { ProductDetail, Home, Shop, Cart } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="shop/:id" element={<ProductDetail />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
