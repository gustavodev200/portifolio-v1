import { BiMenu } from "react-icons/bi";
import { Dispatch, SetStateAction } from "react";
import { NavMenuMobile } from "../MenuMobile/styles";
import { NavMenuDesktop } from "./styles";

interface IMenuProps {
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>;
}

const MenuDesktop: React.FC<IMenuProps> = ({ setMenuIsVisible }) => {
  return (
    <>
      <NavMenuDesktop>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="#about">SOBRE</a>
          </li>
          <li>
            <a href="#projects">PROJETOS</a>
          </li>
          <li>
            <a href="#">CONTATOS</a>
          </li>
        </ul>
      </NavMenuDesktop>
      <NavMenuMobile>
        <BiMenu
          fontSize={60}
          color="#fff"
          onClick={() => setMenuIsVisible(true)}
        />
      </NavMenuMobile>
    </>
  );
};

export default MenuDesktop;
