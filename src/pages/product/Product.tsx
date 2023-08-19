// Style
import "./product.scss";

// Data
import { singleProduct } from "../../data";

// Components
import { Single } from "../../components";

const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
