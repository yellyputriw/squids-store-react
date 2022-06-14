import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

const ProductList = ({ data, filter, setFilter, filterProduct }) => {
  const navigate = useNavigate();

  return (
    <>
      <section id="categories">
        <div className="categories-list-wrapper">
          <div className="categories-list">
            <ul>
              <li>
                <button className="see-all-btn" onClick={() => setFilter(data)}>
                  LIHAT SEMUA
                </button>
              </li>
              <li className="list">
                <button
                  id="men's clothing"
                  onClick={() => filterProduct("men's clothing")}
                >
                  PAKAIAN PRIA
                </button>
              </li>
              <li className="list">
                <button
                  id="women's clothing"
                  onClick={() => filterProduct("women's clothing")}
                >
                  PAKAIAN WANITA
                </button>
              </li>
              <li className="list">
                <button id="jewelery" onClick={() => filterProduct("jewelery")}>
                  PERHIASAN
                </button>
              </li>
              <li className="list">
                <button
                  id="electronics"
                  onClick={() => filterProduct("electronics")}
                >
                  ELEKTRONIK
                </button>
              </li>
            </ul>
          </div>
          <button className="filter-btn">
            <img src="/icons/filter.svg" alt="" />
            Filter
          </button>
        </div>
      </section>
      <section className="product-list">
        <div className="product-wrapper">
          {filter?.map?.((product) => (
            <div className="product-item" key={product.id}>
              <div className="product-img">
                <img
                  src={product.image}
                  alt="Product Item"
                  width={289}
                  height={289}
                />
                <div className="overlay"></div>
                <div className="top-btn">
                  <button className="add-wishlist">
                    <img
                      src="/icons/add-wishlist.svg"
                      alt="wishlist"
                      width={24}
                      height={24}
                    />
                  </button>
                  <button className="add-cart">
                    <img
                      src="/icons/add-cart.svg"
                      alt="cart"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
                <div className=" bottom-btn">
                  <button>Beli Sekarang</button>
                </div>
              </div>
              <div className="product-desc">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price">Rp. {product.price}</p>
                <div className="rating">
                  <Rating value={product.rating.rate} />
                  <p>({product.rating.count} Ulasan)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="see-more-product" onClick={() => navigate("/store")}>
          Lihat Semua
        </button>
      </section>
    </>
  );
};

export default ProductList;
