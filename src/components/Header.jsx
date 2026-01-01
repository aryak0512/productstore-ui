import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faShoppingCart, faSun} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {CartContext} from "../context/CartContext.jsx";

const Header = () => {

    const {totalQuantity} = useContext(CartContext)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    })

    // for setting the theme for first load of page
    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.remove("dark")
        } else {
            document.documentElement.classList.add("dark")
        }
    }, []);

    function toggleThemeButtonClicked() {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            if (prevTheme === "light") {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
            localStorage.setItem("theme", newTheme); // saved in browser
            return newTheme;
        })
    }

    return (
        <nav className="bg-gray-800 dark:bg-gray-50 text-emerald-600 text-xl dark:text-blue-950">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold">
                        ShopHub
                    </div>

                    <button onClick={toggleThemeButtonClicked}>
                        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun}/>
                    </button>

                    <div className="flex space-x-6">
                        <NavLink to="/home" className="hover:text-gray-300">
                            Home
                        </NavLink>
                        <NavLink to="/login" className="hover:text-gray-300">
                            Shop
                        </NavLink>
                        <NavLink to="/about" className="hover:text-gray-300">
                            About
                        </NavLink>
                        <NavLink to="/contact" className="hover:text-gray-300">
                            Contact
                        </NavLink>
                        <NavLink to="/cart" className="hover:text-gray-300">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            <div>{totalQuantity}</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );

};

export default Header;