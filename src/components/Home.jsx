import PageHeading from "./PageHeading.jsx";
import ProductListings from "./ProductListings.jsx";
import apiClient from "../api/apiClient.js";
import {useLoaderData} from "react-router-dom"

const Home = () => {

    const products = useLoaderData(); // Data is available immediately

    return (
        <div>
            <PageHeading title="Welcome to Shop Hub">
                The best online shop of the UK!
            </PageHeading>
            <ProductListings products={products}/>
        </div>
    );
}

// loader function
export async function productLoader() {
    try {
        const response = await apiClient.get("/products"); // Axios GET Request
        return response.data;
    } catch (error) {
        throw new Response(error.message || "Something went wrong!", {status: error.status || 500})
    }
}

export default Home;

