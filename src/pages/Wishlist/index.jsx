import Layout from "../../components/Layout";
import wishlistData from "../../data/wishlistData";
import UserMenu from "../../components/UserMenu";

const WishlistSection = () => {
  // const [wishlists, setDeleteWishlist] = useState(wishlistData);

  // const handleDeleteWishlist = (id) => {
  //   setDeleteWishlist((current) =>
  //     current.filter((wishlist) => {
  //       return wishlist.id !== id;
  //     })
  //   );
  // };

  return (
    <Layout>
      <section className="wishlist">
        <UserMenu />
        <div className="wishlist-wrapper">
          <h2>Wishlist</h2>
          <div className="wishlist-list">
            {wishlistData.map((wishlist) => (
              <div className="wishlist-item" key={wishlist.id}>
                <img
                  src={wishlist.image}
                  alt="wishlist product"
                  width={128}
                  height={128}
                />
                <div className="product-detail">
                  <h3>{wishlist.name}</h3>
                  <div className="variasi">
                    <p>
                      Jumlah: <span>{wishlist.amount}</span>
                    </p>
                    <p>
                      Stok Tersedia: <span>{wishlist.stock}</span>
                    </p>
                    <p>
                      Ukuran: <span>{wishlist.size}</span>
                    </p>
                  </div>
                  <p className="price">Rp. {wishlist.price}</p>
                </div>
                <div className="action">
                  <button className="add-to-cart">Tambah ke Keranjang</button>
                  <button className="delete">
                    <img
                      src="/icons/trash.svg"
                      alt="trash"
                      width={17}
                      height={17}
                    />
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WishlistSection;
