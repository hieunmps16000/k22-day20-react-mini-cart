function ProductCard({ product, setCart }) {
    const { id, name, price, image } = product;
    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    };
    return (
        <article className="flex flex-col gap-4 p-[10px] border border-[#dbdbdb] rounded-xl">
            <img className="aspect-square rounded-md" src={image} />
            <div className="flex-1 flex flex-col gap-[20px]">
                <h3 className="text-[20px] font-[500] line-clamp-1">{name}</h3>
                <div className="flex items-center gap-[10px]">
                    <span className="text-[18px] font-[500]">{`${price.toLocaleString("vi-VN")}đ`}</span>
                </div>
                <button
                    className="mt-auto border border-[#dbdbdb] py-2 rounded-full font-[500] bg-[#f1f1f1] cursor-pointer hover:brightness-98 ['disable']:pointer-none"
                    onClick={() => addToCart(product)}
                >
                    Thêm vào giỏ
                </button>
            </div>
        </article>
    );
}

export default ProductCard;
