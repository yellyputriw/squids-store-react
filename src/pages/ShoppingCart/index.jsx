import Layout from "../../components/Layout";
import CartWrapper from "./CartWrapper";

const ShoppingCartSection = () => {
  return (
    <Layout>
      <div className="cart-container">
        <CartWrapper />
        <div className="checkout-btn">
          <button>CHECKOUT</button>
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingCartSection;
