import axios from "axios";
import { useEffect, useState } from "react";

const ProductListAPI = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const result = await axios.get("https://fakestoreapi.com/products");

        if (active) {
          setProduct(result?.product?.list);
        }
      } catch (e) {
        console.log(e);
      }
    })();
    return () => {
      active = false;
    };
  }, []);
  return (
    <div className="product-list">
      {product?.map?.((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductListAPI;
