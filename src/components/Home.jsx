import PageHeading from "./PageHeading.jsx";
import ProductListings from "./ProductListings.jsx";
import apiClient from "../api/apiClient.js";
import {useEffect, useState} from "react";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Run once when the component mounts
    // Mounting is the process of creating and adding the component into DOM
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await apiClient.get("/products"); // Axios GET Request
            setProducts(response.data); // Update products state with fetched data
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError("Cannot load products from backend!!");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <p className="font-bold text-amber-900">{loading}</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center">
                <p className="font-bold text-amber-900">{error}</p>
            </div>
        );
    }

    return (
        <div>
            <PageHeading title="Welcome to Shop Hub">
                The best online shop of the UK!
            </PageHeading>
            <ProductListings products={products}/>
        </div>
    );
}

export default Home;

