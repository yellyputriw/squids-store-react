import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='container'>
          <NavbarLogo />
          <NavbarMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
