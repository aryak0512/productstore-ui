import ProductCard from "./ProductCard.jsx";
import SearchBox from "./SearchBox.jsx";
import {useMemo, useState} from "react";
import Dropdown from "./Dropdown.jsx";

const ProductListings = ({products}) => {

    const [itemToSearch, setItemToSearch] = useState("")
    const [sortingStrategy, setSortingStrategy] = useState("Popularity")
    const options = ["Popularity", "Increasing price", "Decreasing price"];

    // the expense operation of filter and sort is placed inside useMemo for caching
    const filteredAndSortedProducts = useMemo(() => {

        // filtering logic
        let filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(itemToSearch.toLowerCase())
        );

        // sorting logic
        switch (sortingStrategy) {
            case "Increasing price": {
                filteredProducts = filteredProducts.sort((a, b) => a.price - b.price)
                break;
            }
            case "Decreasing price": {
                filteredProducts = filteredProducts.sort((a, b) => b.price - a.price)
                break;
            }
            default: {
                filteredProducts = filteredProducts.sort((a, b) => b.popularity - a.popularity)
                break;
            }
        }
        return filteredProducts;

    }, [sortingStrategy, itemToSearch, products]);


    // used by SearchBox
    function handleSearchChange(searchText) {
        setItemToSearch(searchText);
        console.log("Text given for search is : ", itemToSearch)
    }

    function handleSort(event, strategy) {
        setSortingStrategy(strategy);
        console.log("Sorting strategy selected is : ", strategy)
    }

    return (
        <div className="max-w-[1152px] mx-auto">

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
                <SearchBox label="Search" placeholder="Seach products..." value={itemToSearch}
                           handleSearchChange={handleSearchChange}/>
                <Dropdown selectedValue="Popularity" options={options} label="Sort By" handleSort={handleSort}/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
                {/*tricky nasty syntax alert!!*/}
                {filteredAndSortedProducts.length > 0 ? (
                    filteredAndSortedProducts.map((product) => (
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

