import CartWrapper from './CartWrapper';

const ShoppingCartSection = () => {
  return (
    <div className='cart-container'>
      <CartWrapper />
      <div className='checkout-btn'>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default ShoppingCartSection;
