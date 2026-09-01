import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard.jsx"
import Cart from "./components/Cart.jsx";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";

import "./App.css";
import products from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((total, item) => {
      return total + item.price*item.quantity
  },0);

    function handleAddToCart(product){
        const existingProduct = cart.find((item) => item.id === product.id);
        if(!existingProduct) setCart([...cart, {...product, quantity: 1}])
        else handleIncrease(product)
    }
    function handleIncrease(product) {
        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct){
            setCart(
                cart.map((item) => {
                        if (item.id === product.id) {
                            return {...item, quantity: item.quantity + 1};
                        } else {
                            return item;
                        }
                    }
                )
            )
        } else {
            handleAddToCart(existingProduct)
        }
    }

    function handleDecrease(product){
        const existingProduct = cart.find((item) => item.id === product.id);

        if(existingProduct && existingProduct.quantity > 1){
            setCart(
                cart.map((item) => {
                        if(item.id === product.id) {
                            return {...item, quantity: item.quantity - 1}
                        } else {
                            return item;
                        }
                    }
                )
            )
        } else if (existingProduct && existingProduct.quantity === 1) {
            return handleRemoveFromCart(existingProduct)
        }
    }

    function handleRemoveFromCart (product){
      setCart(
          cart.filter((item) => {
              return item.id !== product.id
          })
      )
    }
  return (
      <BrowserRouter>
          <Header title="My website" />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
          </Routes>
      </BrowserRouter>

  );
}

export default App;