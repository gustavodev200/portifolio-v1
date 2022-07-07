import styled from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

export const AboutWrapper = styled.section`
  width: 100%;
  height: auto;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    img {
      width: 60%;
    }
  }
`;

export const TitleAbout = styled.header`
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

export const MainAbout = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  p {
    color: #fff;
  }

  @media ${device.tablet} {
    height: 100vh;

    p {
      font-size: ${pixelToRem(20)};
      color: #fff;
    }

    img {
      width: 60%;
    }
  }

  @media ${device.laptopL} {
    display: flex;

    img {
      width: 60%;
    }
  }
`;

export const ImgAbout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    width: 80%;
  }

  @media ${device.tablet} {
    img {
      width: 80%;
    }
  }

  @media ${device.laptopL} {
    img {
      width: 80%;
    }
  }
`;
