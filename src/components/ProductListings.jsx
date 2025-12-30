import ProductCard from "./ProductCard.jsx";
import SearchBox from "./SearchBox.jsx";
import {useState} from "react";

const ProductListings = ({products}) => {

    const [itemToSearch, setItemToSearch] = useState("")

    // used by SearchBox
    function handleSearchChange(searchText) {
        setItemToSearch(searchText);
        console.log("Text given for search is : ", itemToSearch)
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(itemToSearch.toLowerCase())
    );

    return (
        <div className="max-w-[1152px] mx-auto">

            <SearchBox label="Search" placeholder="Seach products..." value={itemToSearch}
                       handleSearchChange={handleSearchChange}/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
                {/*tricky nasty syntax alert!!*/}
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.productId} product={product}/>
                    ))
                ) : (
                    <p className="text-center font-primary font-bold text-lg text-primary">No products found</p>
                )}
            </div>
        </div>
    );
}

export default ProductListings;

