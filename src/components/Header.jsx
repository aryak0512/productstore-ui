import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <nav className="bg-gray-800 text-white text-xl">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold">
                        ShopHub
                    </div>

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