import Price from "./Price.jsx";

const ProductCard = ({product}) => {
    return (
        <>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <Price price={product.price} currency="$"/>
        </>

    );
}

export default ProductCard;