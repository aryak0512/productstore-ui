import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faShoppingCart, faSun} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Header = () => {

    const [theme, setTheme] = useState("light")

    function test() {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            if (prevTheme === "light") {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
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

                    <button onClick={test}>
                        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun}/>
                    </button>

                    <div className="flex space-x-6">
                        <a href="/" className="hover:text-gray-300">
                            Home
                        </a>
                        <a href="/shop" className="hover:text-gray-300">
                            Shop
                        </a>
                        <a href="/about" className="hover:text-gray-300">
                            About
                        </a>
                        <a href="/contact" className="hover:text-gray-300">
                            Contact
                        </a>
                        <a href="/cart" className="hover:text-gray-300">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );

};

export default Header;