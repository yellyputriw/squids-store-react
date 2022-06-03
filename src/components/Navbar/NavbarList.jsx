import { Link } from 'react-router-dom';

const NavbarList = () => {
  return (
    <div className='nav-wrapper'>
      <ul>
        <li>
          <Link to='/'>Beranda</Link>
        </li>
        <li>
          <Link to='/store'>Toko</Link>
        </li>
        <li>
          <Link to='/store'>Paket</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/store'>Kontak</Link>
        </li>
        <li>
          <Link to='/store'>Tentang Kami</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarList;
