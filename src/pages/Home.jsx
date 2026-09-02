import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
    const featuredProducts = products.filter((item) => item.feature)
    return (
        <div>
            <h2>Highlight Products</h2>
            <div className={"products"}>
                {featuredProducts.map((p) => (
                    <ProductCard
                        key={p.id}
                        product={p}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;