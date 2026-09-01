import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home({onAddToCart}) {
    return (
        <div className="products">
            {products.map((p) => (
                <ProductCard
                    key={p.id}
                    product={p}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}

export default Home;