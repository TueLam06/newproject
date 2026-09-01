import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail({onAddToCart}) {
    const { id } = useParams();
    const product = products.find(
        (item) => item.id === Number(id)
    );
    console.log("onAddToCart:", onAddToCart);
    return (
        <div>
            <h1>{product.name}</h1>
            <p>Price: {product.price}$ </p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>

            <button onClick={() => {onAddToCart(product)}}>
                Add to cart
            </button>

        </div>
    );
}

export default ProductDetail;