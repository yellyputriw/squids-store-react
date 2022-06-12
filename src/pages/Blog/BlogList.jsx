import { BlogListData } from './BlogListData';

const BlogList = () => {
  const blogs = BlogListData();

  return (
    <div className='blog-list'>
      {blogs.map((blog) => (
        <div className='blog-item' key={blog.id}>
          <div className='blog-header'>
            <img src={blog.blogBanner} alt='Banner' width={600} height={292} />
          </div>
          <div className='blog-body'>
            <p className='categories'>{blog.blogCategories}</p>
            <h2>{blog.blogTitle}</h2>
            <p className='author'>Oleh {blog.blogAuthor}</p>
            <p className='content'>
              {blog.blogContent}
              <a href='./blog-detail.html'>Selengkapnya</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
