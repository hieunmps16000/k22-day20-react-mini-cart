import ProductCard from "./ProductCard";

function ProductList({ products, cart, setCart }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[12px] md:gap-[30px]">
            {products.length > 0 &&
                products.map((product) => (
                    <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
                ))}
        </div>
    );
}

export default ProductList;
