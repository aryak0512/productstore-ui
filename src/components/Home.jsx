import PageHeading from "./PageHeading.jsx";
import ProductListings from "./ProductListings.jsx";
import products from "../data/products.js";

const Home = () => {
    return (
        <>
            <PageHeading title="Welcome to Shop Hub">
                The best online shop of the UK!
            </PageHeading>
            <ProductListings products={products}/>
        </>
    );
}

export default Home;

