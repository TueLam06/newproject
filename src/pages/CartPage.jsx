import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";

function CartPage() {
    const {cart, total, increaseQuantity, decreaseQuantity, removeFromCart} = useCart()
    return (
        <Cart
            cart={cart}
            total={total}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeFromCart}

        />
    )
}

export default CartPage;