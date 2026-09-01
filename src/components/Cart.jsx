
function Cart ({cart, total, onIncrease, onDecrease, onRemove}){
    return (
        <div className="cart">
            <h2>
                Your cart: {cart.length} products - {total}$
            </h2>
            {cart.map((item) => (
                <p key={item.id}>
                    {item.name} - {item.price}$ x {item.quantity}

                    <button onClick={() => onDecrease(item)}>
                        [-]
                    </button>

                    <button onClick={() => onRemove(item)}>
                        [Remove from card]
                    </button>

                    <button onClick={() => onIncrease(item)}>
                        [+]
                    </button>
                </p>
            ))}

        </div>
    )
}
export default Cart;