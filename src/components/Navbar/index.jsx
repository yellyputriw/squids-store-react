import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";

const Navbar = ({ search }) => {
  return (
    <header>
      <nav>
        <div className="container">
          <NavbarLogo />
          <NavbarMenu search={search} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
