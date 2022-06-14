import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, search }) => {
  return (
    <>
      <Navbar search={search} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
