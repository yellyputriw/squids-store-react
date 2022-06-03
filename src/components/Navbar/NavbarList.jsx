import { NavbarListData } from './NavbarListData';

const NavbarList = () => {
  const navbars = NavbarListData();

  return (
    <div className='nav-wrapper'>
      <ul>
        {navbars.map((nav) => (
          <li key={nav.title}>
            <a href='{nav.hrefLink}'>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarList;
