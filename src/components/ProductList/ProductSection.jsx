import ProductList from './ProductList';

const ProductSection = () => {
  return (
    <section className='product-list'>
      <ProductList />
      <button className='see-more-product'>Lihat Semua</button>
    </section>
  );
};

export default ProductSection;
