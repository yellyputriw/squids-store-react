import Layout from "../components/Layout";
import ProductList from "../components/Product";

const Store = () => {
  return (
    <Layout>
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
        <ProductList />
      </div>
    </Layout>
  );
};

export default Store;
