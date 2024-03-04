import React from "react";

import Cart from "./components/Cart.jsx";
import Home from "./pages/Home.jsx";

import Layout from "./components/Layout.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
