import PageHeading from "./PageHeading.jsx";
import ProductListings from "./ProductListings.jsx";
import apiClient from "../api/apiClient.js";
import {useEffect, useState} from "react";

const Home = () => {
    const [products, setProducts] = useState([]);

    // Run once when the component mounts
    // Mounting is the process of creating and adding the component into DOM
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {

        const response = await apiClient.get("/products"); // Axios GET Request
        setProducts(response.data); // Update products state with fetched data

    };
    
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

