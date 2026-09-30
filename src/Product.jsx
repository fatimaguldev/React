import "./Product.css"
import Price from "./Price.jsx";

function Product({title}) {
    console.log(features);
    
    return (
        <div className="Product">
            <h4>{ title}</h4>
            <p>Description</p>
            <Price/>
        </div>
    );
}

export default Product;