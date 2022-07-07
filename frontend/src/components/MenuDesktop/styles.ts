import styled from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

export const NavMenuDesktop = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;

    li {
      list-style-type: none;
    }

    li:nth-child(-n + 4) {
      margin: ${pixelToRem(20)};
    }

    a {
      color: #fff;
      font-weight: bold;
      transition: color 0.2s;
      position: relative;
      &:hover {
        color: #3888ff;
      }

      &:focus {
        color: #3888ff;
        border-bottom: 2px solid #3888ff;
      }
    }
  }

  @media ${device.mobileS} {
    display: none;
  }
`;
