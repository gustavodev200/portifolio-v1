import { NavbarWrapper, NavLogo } from "./styles";
import logo from "../../../assets/images/logo.svg";
import { useState } from "react";
import MenuMobile from "../../MenuMobile";
import MenuDesktop from "../../MenuDesktop";

const Navbar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(true);

  return (
    <NavbarWrapper>
      <NavLogo>
        <img src={logo} alt="Logo page" />
        <h1>GUSTAVO L.</h1>
      </NavLogo>
      <MenuDesktop />
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
    </NavbarWrapper>
  );
};
export default Navbar;
