import CartItem from "./CartItem";

function Cart({ cart, setCart }) {
    return (
        <div className="sticky top-[20px] p-2 bg-gray-100 self-start">
            <h2 className="mb-5 text-[20px] text-center">Giỏ hàng của bạn</h2>
            <div>
                {cart.length > 0 ? (
                    cart.length > 0 &&
                    cart.map((product, index) => <CartItem key={index} product={product} setCart={setCart} />)
                ) : (
                    <span className="block text-center">Giỏ hàng trống!</span>
                )}
            </div>
            {cart.length > 0 && (
                <div className="text-[18px] font-[500] mt-[20px]">
                    <div>Tổng sản phẩm: {cart.reduce((total, item) => (total += item.quantity), 0)}</div>
                    <div>
                        <span>
                            Tổng tiền:{" "}
                            {`${cart.reduce((total, item) => (total += item.price * item.quantity), 0).toLocaleString("vi-VN")}đ`}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
