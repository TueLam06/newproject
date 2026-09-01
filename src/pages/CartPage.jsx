import Cart from "../components/Cart";

function CartPage({cart, total, onIncrease, onDecrease, onRemove}) {
    return (
        <Cart
        cart={cart}
        total={total}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemove={onRemove}
    />
    )
}

export default CartPage;