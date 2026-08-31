import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
    return (
        <div className="products">
            {products.map((p) => (
                <ProductCard
                    key={p.id}
                    product={p}
                />
            ))}
        </div>
    );
}

export default Home;