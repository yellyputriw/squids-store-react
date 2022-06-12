import { useNavigate } from "react-router-dom";

const NavbarButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className="cart-btn nav-shortcut-btn">
        <img
          src="/icons/cart.svg"
          alt="Cart"
          onClick={() => navigate("/shoppingcart")}
          width={17}
          height={17}
        />
      </button>
      <button
        className="user-btn nav-shortcut-btn"
        onClick={() => navigate("/profile")}
      >
        <img src="/icons/user.svg" alt="User" width={17} height={17} />
      </button>
    </div>
  );
};

export default NavbarButton;
