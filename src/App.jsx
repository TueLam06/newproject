import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard.jsx"
import "./App.css";
import Cart from "./components/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((total, item) => {
      return total + item.price*item.quantity
  },0);
  const product = [
    { id: 1, name: "Laptop", price: 2000 },
    { id: 2, name: "Keyboard", price: 150 },
    { id: 3, name: "Mouse", price: 50 },
  ]
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
      <>
        <Header title = "My website"/>

        <main>
            <Cart
                cart={cart}
                total={total}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemoveFromCart}
            />
          <div className="products">
            {product.map((p) => (
                <ProductCard
                    key = {p.id}
                    product = {p}
                    onAddToCart={handleAddToCart}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onRemoveFromCart={handleRemoveFromCart}
                />
                ))}
          </div>
        </main>
      </>
  );
}

export default App;