import NavbarButton from "./NavbarButton";
import NavbarList from "./NavbarList";
import NavbarSearch from "./NavbarSearch";

const NavbarMenu = ({ search }) => {
  return (
    <div className="nav-wrapper">
      <NavbarList />
      <NavbarSearch search={search} />
      <NavbarButton />
    </div>
  );
};

export default NavbarMenu;
