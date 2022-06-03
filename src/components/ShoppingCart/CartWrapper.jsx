import CartList from './CartList';
import CartAmount from './CartAmount';

const CartWrapper = () => {
  return (
    <div className='cart-wrapper'>
      <h1>Keranjang Saya</h1>
      <CartList />
      <CartAmount />
    </div>
  );
};

export default CartWrapper;
