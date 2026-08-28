import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard.jsx"

function App() {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((total, item) => {
      return total + item.price
  },0);
  const product = [
    { id: 1, name: "Laptop", price: 2000 },
    { id: 2, name: "Keyboard", price: 150 },
    { id: 3, name: "Mouse", price: 50 },
  ]
    function handleAddToCart(product) {
        setCart([...cart, product]);
    }

    function handleRemoveFromCart (productId){
      setCart(
          cart.filter((item) => {
              return item.id !== productId
          })
      )
    }
  return (
      <>
        <Header title = "My website"/>

        <main>
          <h2> Your cart: {cart.length} products - {total}$</h2>
            <div>{cart.map((item) => (
                <p key={item.id}>
                    {item.name} - {item.price}
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                        Remove from Card
                    </button>
                </p>

            ))}</div>

          <div>
            {product.map((p) => (
                <ProductCard
                    key = {p.id}
                    product = {p}
                    onAddToCard={handleAddToCart}
                />
                ))}
          </div>
        </main>
      </>
  );
}

export default App;