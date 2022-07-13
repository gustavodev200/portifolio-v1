import styled from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #14171a;
  margin-top: ${pixelToRem(150)};

  span {
    width: 100%;
    text-align: center;
    font-weight: bold;
    padding: 15px 0;
    color: #c4c4c4;
  }

  @media ${device.laptopL} {
    margin-top: 0;
  }
`;
