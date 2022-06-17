import { NavbarWrapper, NavLogo } from "./styles";
import logo from "../../../assets/images/logo.svg";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavLogo>
        <img src={logo} alt="Logo page" />
        <h1>GUSTAVO L.</h1>
      </NavLogo>
      <div>
        <BiMenu fontSize={60} color="#fff" />
      </div>
    </NavbarWrapper>
  );
};
export default Navbar;
