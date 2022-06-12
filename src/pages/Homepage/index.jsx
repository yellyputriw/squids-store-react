import Layout from "../../components/Layout";
import Carousel from "./Carousel";
import Collections from "./Collections";
import ProductList from "../../components/Product";
import Chat from "./Chat";

const Homepage = () => {
  return (
    <Layout>
      <main>
        <section id="hero">
          <Carousel />
          <Collections />
          <Chat />
        </section>
        <ProductList />
      </main>
    </Layout>
  );
};

export default Homepage;
