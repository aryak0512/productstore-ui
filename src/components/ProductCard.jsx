import Price from "./Price.jsx";

const ProductCard = ({product}) => {
    return (
        <>
            <div>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-card-image"
                />
            </div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <Price price={product.price} currency="$"/>
        </>

    );
}

export default ProductCard;