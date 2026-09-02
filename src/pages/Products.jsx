import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
    return (
        <div>
            <h2>Products Page</h2>
            <div className="products">
                {products.map((p) => (
                    <ProductCard
                        key={p.id}
                        product={p} />
                ))}
            </div>
        </div>
    );
}
export default Products;