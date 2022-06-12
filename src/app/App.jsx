import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Store from "../pages/Store";
import Profile from "../pages/Profile";
import ShoppingCart from "../pages/ShoppingCart";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Wishlist from "../pages/Wishlist";
import EditProfile from "../pages/EditProfile";
import CustomerGreeting from "../pages/CustomerGreeting";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/store" exact element={<Store />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/shoppingcart" exact element={<ShoppingCart />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/wishlist" exact element={<Wishlist />} />
        <Route path="/edit-Profile" exact element={<EditProfile />} />
        <Route path="/customer-greeting" exact element={<CustomerGreeting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
