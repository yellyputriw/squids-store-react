import Navbar from '../Navbar/Navbar';
import Carousel from '../Homepage/Carousel/Carousel';
import Collections from '../Homepage/Collections/Collection';
import ProductSection from '../ProductList/ProductSection';
import Footer from '../Footer/Footer';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id='hero'>
          <Carousel />
          <Collections />
        </section>
        <ProductSection />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
