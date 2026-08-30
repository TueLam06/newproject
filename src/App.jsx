import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard.jsx"
import "./App.css";

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
                        }
                    }
                )
            )
        } else if (existingProduct && existingProduct.quantity === 1) {
            return handleRemoveFromCart(existingProduct.id)
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
            <div className="cart">
                <h2> Your cart: {cart.length} products - {total}$</h2>
                {cart.map((item) => (
                    <p key={item.id}>
                        {item.name} - {item.price}$ - Quantity: {item.quantity}
                    </p>

            ))}</div>

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