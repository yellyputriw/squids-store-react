import NavbarButton from './NavbarButton';
import NavbarList from './NavbarList';
import NavbarSearch from './NavbarSearch';

const NavbarMenu = () => {
  return (
    <div className='nav-wrapper'>
      <NavbarList />
      <NavbarSearch />
      <NavbarButton />
    </div>
  );
};

export default NavbarMenu;
