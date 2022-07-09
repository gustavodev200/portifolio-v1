import styled from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

export const TitleWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;

  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: ${pixelToRem(60)};
    }

    span:nth-child(n + 2) {
      font-size: ${pixelToRem(40)};
      color: transparent;
      -webkit-text-stroke: 0.5px #fff;
      margin-top: -20px;
    }
  }

  @media ${device.tablet} {
    justify-content: flex-start;
    h2 {
      span {
        font-size: ${pixelToRem(70)};
      }

      span:nth-child(n + 2) {
        font-size: ${pixelToRem(50)};
      }
    }
  }
`;
