import styled from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

export const AboutWrapper = styled.section`
  position: relative;
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

export const MainAbout = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 15%;
    color: #fff;
  }

  @media ${device.tablet} {
    height: 100vh;

    p {
      font-size: ${pixelToRem(15)};
    }

    img {
      width: 60%;
    }
  }

  @media ${device.laptopL} {
    display: flex;

    p {
      font-size: ${pixelToRem(20)};
    }

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

export const TechsStyles = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  bottom: 0;
  left: 0;

  @media ${device.laptopL} {
    display: flex;
  }
`;
