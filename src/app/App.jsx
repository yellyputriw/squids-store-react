import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../components/Layout/Homepage';
import Store from '../components/Layout/Store';
import Profile from '../components/Layout/Profile';
import ShoppingCart from '../components/Layout/ShoppingCart';
import Blog from '../components/Layout/Blog';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/store' exact element={<Store />} />
        <Route path='/blog' exact element={<Blog />} />
        <Route path='/profile' exact element={<Profile />} />
        <Route path='/shoppingcart' exact element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
