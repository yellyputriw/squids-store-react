import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import ProductList from "../components/Product";

const Store = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const result = await axios.get("https://fakestoreapi.com/products");

        if (active) {
          setData(result?.data);
          setFilter(result?.data);
        }
      } catch (e) {
        console.log(e);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const searchProduct = (cat) => {
    const updateList = data.filter(
      (x) => x.title.toLowerCase().indexOf(cat.toLowerCase()) !== -1
    );
    setFilter(updateList);
  };

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  return (
    <Layout search={searchProduct}>
      <div className="store-container">
        <div className="store-header">
          <div className="store-header-wrapper">
            <img
              src="/images/store-logo.png"
              width={277}
              height={79}
              alt="Store Logo"
            />
            <p>PUT STORE MOTTO OR TAGLINE HERE!</p>
          </div>
        </div>
        <ProductList
          data={data}
          filter={filter}
          setFilter={setFilter}
          filterProduct={filterProduct}
        />
      </div>
    </Layout>
  );
};

export default Store;
