import BlogList from './BlogList';

const BlogSection = () => {
  return (
    <section className='blog'>
      <BlogList />
      <div className='pagination-btn'>
        <button>
          <img src='/icons/chevron-left.svg' alt='' />
          Sebelumnya
        </button>
        <div className='page'>
          <a href={'/'} className='active'>
            1
          </a>
          <a href={'/'}>2</a>
          <a href={'/'}>3</a>
          <a href={'/'} className='dots'>
            ...
          </a>
          <a href={'/'}>10</a>
        </div>
        <button>
          Selanjutnya
          <img src='/icons/chevron-right.svg' alt='' />
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
