import styled from "styled-components";
import pixelToRem from "../../../utils/pxToRem";

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: ${pixelToRem(60)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.div`
  width: ${pixelToRem(160)};
  height: ${pixelToRem(40)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3.5px solid rgba(196, 196, 196, 0.5);
  border-radius: 50px;
  padding: 5px 0;

  img {
    width: 30%;
    margin-right: ${pixelToRem(10)};
  }

  h1 {
    padding: 0 7px 0 0;
    font-size: ${pixelToRem(15)};
  }
`;
