import styled from "styled-components";
import { device } from "../../styles/responsive";

export const NavMenuMobile = styled.div`
  display: flex;

  @media ${device.tablet} {
    display: none;
  }
`;
