import { ProductListData } from '../../views/ProductListData';

const ProductList = () => {
  const products = ProductListData();

  return (
    <div className='product-wrapper'>
      {products.map((product) => (
        <button className='product-item' key={product.id}>
          <img
            src={product.productImg}
            alt='Product Item'
            width={289}
            height={289}
          />
          <div className='product-desc'>
            <h2 className='product-title'>{product.productTitle}</h2>
            <p className='product-price'>Rp. {product.productPrice}</p>
            {/* <div class="rating">
                <span class="${product.rating1}"></span>
                <span class="${product.rating2}"></span>
                <span class="${product.rating3}"></span>
                <span class="${product.rating4}"></span>
                <span class="${product.rating5}"></span>
                <p>(${product.review} Ulasan)</p>
              </div> */}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ProductList;
