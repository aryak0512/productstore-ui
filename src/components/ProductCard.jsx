import Price from "./Price.jsx";
import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";

const ProductCard = ({product}) => {
    const {addToCart} = useContext(CartContext);

    return (
        <div
            className="mx-auto flex h-[420px] w-72 flex-col overflow-hidden
                 rounded-md border border-gray-300 bg-white shadow-md
                 transition hover:shadow-lg"
        >
            {/* Image */}
            <div className="h-44 overflow-hidden">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4 font-primary">
                <h2 className="mb-2 line-clamp-1 text-xl font-semibold text-primary">
                    {product.name}
                </h2>

                <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                    {product.description}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between">
                    <div className="rounded-tl-md bg-lighter px-4 py-2 text-sm font-medium text-primary">
                        <Price currency="$" price={product.price}/>
                    </div>

                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5
                       text-sm font-medium text-white shadow-md
                       transition-all hover:bg-green-700 hover:shadow-lg
                       active:scale-95"
                        onClick={addToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;