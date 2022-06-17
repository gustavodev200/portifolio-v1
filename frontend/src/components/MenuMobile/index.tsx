import { BiMenu } from "react-icons/bi";
import { NavMenuMobile } from "./styles";

interface MenuProps {
  menuIsVisible?: React.ReactNode;
  setMenuIsVisible?: (value: boolean) => void;
}

const MenuMobile: React.FC<MenuProps> = ({
  menuIsVisible,
  setMenuIsVisible,
}) => {
  return (
    <NavMenuMobile>
      <BiMenu fontSize={60} color="#fff" />
    </NavMenuMobile>
  );
};

export default MenuMobile;
