const NavbarSearch = () => {
  return (
    <form action='#' className='search-bar'>
      <span className='search-icon'>
        <img src='/icons/search.svg' alt='Search' />
      </span>
      <input
        type='search'
        placeholder='Cari'
        className='search-input'
        id='search-bar'
        // value={search}
      />
    </form>
  );
};

export default NavbarSearch;
