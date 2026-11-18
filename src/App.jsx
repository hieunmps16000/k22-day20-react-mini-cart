import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
    console.log("Render component App");
    const products = [
        {
            id: 1,
            name: "Essence Mascara Lash Princess",
            price: 100000,
            image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
        },
        {
            id: 2,
            name: "Eyeshadow Palette with Mirror",
            price: 1500000,
            image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
        },
        {
            id: 3,
            name: "Powder Canister",
            price: 600000,
            image: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
        },
        {
            id: 4,
            name: "Red Lipstick",
            price: 249000,
            image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
        },
        {
            id: 5,
            name: "Red Nail Polish",
            price: 129000,
            image: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
        },
        {
            id: 6,
            name: "Calvin Klein CK One",
            price: 349000,
            image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
        },
        {
            id: 7,
            name: "Chanel Coco Noir Eau De",
            price: 589000,
            image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
        },
        {
            id: 8,
            name: "Dior J'adore",
            price: 634000,
            image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
        },
    ];
    const [cart, setCart] = useState([]);

    return (
        <>
            <div className="flex items-center justify-between mb-4 p-4 bg-black text-white">
                <h2 className="text-[24px] font-[800]">Minishop</h2>
            </div>
            <div className="grid grid-cols-[3fr_1fr] gap-[30px] w-[min(1140px,100%-48px)] mx-auto px-3">
                <ProductList cart={cart} setCart={setCart} products={products} />
                <Cart cart={cart} setCart={setCart} />
            </div>
        </>
    );
}

export default App;
