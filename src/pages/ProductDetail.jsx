import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
    const { id } = useParams();
    const product = products.find(
        (item) => item.id === Number(id)
    );
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.price}$ </p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p> {product.stock}</p>

        </div>
    );
}

export default ProductDetail;