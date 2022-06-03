const NavbarButton = () => {
  return (
    <div>
      <button className='cart-btn nav-shortcut-btn'>
        <img src='/icons/cart.svg' alt='Cart' width='17' height='17' />
      </button>
      <button className='user-btn nav-shortcut-btn'>
        <img src='/icons/user.svg' alt='User' width='17' height='17' />
      </button>
    </div>
  );
};

export default NavbarButton;
