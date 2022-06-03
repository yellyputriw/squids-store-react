import { UserMenuList } from './UserMenuList';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const menus = UserMenuList();

  return (
    <div className='menu-wrapper'>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id}>
            <img
              src={menu.menuIcon}
              alt={menu.menuTitle}
              width='20'
              height='20'
            />
            <Link to={menu.MenuLink}>{menu.menuTitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserMenu;
