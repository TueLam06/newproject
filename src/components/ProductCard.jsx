function ProductCard({ product, onAddToCart }) {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price} $</p>

            <button onClick={() => onAddToCart(product)}>
                Add to cart
            </button>
        </div>
    );
}

export default ProductCard;