import { Dispatch, SetStateAction } from "react";
import { ContainerMenu } from "./styles";
import { MdClose } from "react-icons/md";

interface IMenuProps {
  menuIsVisible?: boolean;
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>;
}

const MenuMobile: React.FC<IMenuProps> = ({
  menuIsVisible,
  setMenuIsVisible,
}) => {
  return (
    <ContainerMenu isVisible={menuIsVisible}>
      <MdClose
        fontSize={50}
        color="#fff"
        onClick={() => setMenuIsVisible(false)}
      />
      <nav>
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
            <a href="#contact">CONTATOS</a>
          </li>
        </ul>
      </nav>
    </ContainerMenu>
  );
};

export default MenuMobile;
