import Navbar from '../Navbar';
import ShoppingCartSection from '../ShoppingCart';
import Footer from '../Footer';

const ShoppingCart = () => {
  return (
    <>
      <Navbar />
      <main>
        <ShoppingCartSection />
      </main>
      <Footer />
    </>
  );
};

export default ShoppingCart;
