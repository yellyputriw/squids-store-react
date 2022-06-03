import Navbar from '../Navbar';
import Carousel from '../Homepage/Carousel';
import Collections from '../Homepage/Collections';
import ProductSection from '../ProductList';
import Chat from '../Homepage/Chat/Chat';
import Footer from '../Footer';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id='hero'>
          <Carousel />
          <Collections />
          <Chat />
        </section>
        <ProductSection />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
