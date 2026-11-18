function CartItem({ product, setCart }) {
    const increaseQuantity = (id) => {
        setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    };

    const decreaseQuantity = (id) => {
        setCart((prev) =>
            prev.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)),
        );
    };

    const removeProduct = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <article className="flex gap-[12px] py-4 [&+&]:border-t [&+&]:border-[#ccc]">
            <img src={product.image} className="size-[48px] object-cover bg-white rounded-md" />
            <div className="flex flex-col gap-[8px]">
                <h3 className="font-[500] line-clamp-1">{product.name}</h3>
                <p>Đơn giá: {`${product.price.toLocaleString("vi-VN")}đ`}</p>
                <div className="flex items-center gap-[12px]">
                    <div className="flex items-center border border-[#000]">
                        <span
                            className="flex items-center justify-center size-6 border-r border-[#000] select-none cursor-pointer"
                            onClick={() => decreaseQuantity(product.id)}
                        >
                            -
                        </span>
                        <span className="px-4 h-6">{product.quantity}</span>
                        <span
                            className="flex items-center justify-center size-6 border-l border-[#000] select-none cursor-pointer"
                            onClick={() => increaseQuantity(product.id)}
                        >
                            +
                        </span>
                    </div>
                    <span className="select-none cursor-pointer text-sm" onClick={() => removeProduct(product.id)}>
                        Xóa
                    </span>
                </div>
                <p>Thành tiền: {`${(product.price * product.quantity).toLocaleString("vi-VN")}đ`}</p>
            </div>
        </article>
    );
}

export default CartItem;
