import {createContext} from "react";

const initialCartContext = {
    cart: [],
    addToCart: () => {

        console.log("Product added to cart")
    },
    removeFromCart: () => {
    },
    setCart: () => {
    },
    totalQuantity: 0
};
// step 1
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    return (
        <CartContext value={initialCartContext}>
            {children}
        </CartContext>
    );
}