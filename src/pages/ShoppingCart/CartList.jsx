import shoppingCartList from "../../data/shoppingCartList";

const CartList = () => {
  return (
    <div className="cart-list">
      {shoppingCartList.map((cart) => (
        <div className="cart-item">
          <div className="cart-product-img">
            <img src={cart.SCImage} alt="Product" width={128} height={128} />
          </div>
          <div className="cart-product-detail">
            <h2>{cart.SCName}</h2>
            <div className="cart-option">
              <p>
                Jumlah: <span>{cart.SCAmount}</span>
              </p>
              <p>
                Stock Tersedia: <span>{cart.SCStock}</span>
              </p>
              <p>
                Ukuran: <span>{cart.SCSize}</span>
              </p>
            </div>
            <div className="action">
              <button>
                <img src="/icons/trash.svg" alt="Trash" /> Hapus
              </button>
              <button>
                <img src="/icons/pen.svg" alt="Note" /> Tambah Catatan
              </button>
              <p>
                Catatan : <span>Lorem Ipsum dolor sit amet</span>
              </p>
            </div>
          </div>
          <div className="product-price">
            <p>Rp. 200.000</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
