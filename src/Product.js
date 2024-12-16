import PropTypes from "prop-types";

export const Product = (props) => {
    const {productName, price, inStock} = props.data;

    return <div>
        <h2>{productName}</h2>
        <p>{price}</p>
        {inStock ? <p>Produkt dostępny</p> : <p>Produkt niedostępny</p>}
    </div>
}
Product.defaultProps = {
    inStock: true
}
Product.propTypes = {
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inStock: PropTypes.bool
}