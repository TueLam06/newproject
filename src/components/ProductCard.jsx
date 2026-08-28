function ProductCard({product, onAddToCard}){
        return (
            <div>
                <h3>{product.name} </h3>
                <p> {product.price} $ </p>
                    <button onClick={() => onAddToCard(product)}>
                            Add to Cart
                    </button>


            </div>
        )
}
export default ProductCard;