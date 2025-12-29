import ProductCard from "./ProductCard.jsx";

const ProductListings = ({products}) => {
    console.log("Products", products)
    return (
        <>
            {/*tricky nasty syntax alert!!*/}
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.productId} product={product}/>
                ))
            ) : (
                <p className="product-listings-empty">No products found</p>
            )}
        </>

    );
}

export default ProductListings;

