import Product from "./Product.jsx"


function ProductTab() {
    let options = ["High-tech", "Fast", "Durabale"];
    let options2 = {a: "high-tech", b: "durable", c: "fast"};
    return (
      <>
        <Product title="Phone" price={40000} features={options} features2={options2} />
        <Product title="Laptop" price={60000} />
            <Product title="Ipad" price={30000} />
      </>
    );
}

export default ProductTab;