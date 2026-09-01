import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
    return (
        <div className="product-card">
            <Link to={`/products/${product.id}`}> <h3>{product.name}</h3> </Link>

            <p>{product.price} $</p>

            <button onClick={() => onAddToCart(product)}>
                Add to cart
            </button>
        </div>
    );
}

export default ProductCard;