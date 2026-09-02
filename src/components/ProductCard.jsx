import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"

function ProductCard({ product}) {
    const {addToCart} = useCart()
    return (
        <div className="product-card">
            <Link to={`/products/${product.id}`}> <h3>{product.name}</h3> </Link>

            <p>{product.price} $</p>

            <button onClick={() => addToCart(product)}>
                Add to cart
            </button>
        </div>
    );
}

export default ProductCard;