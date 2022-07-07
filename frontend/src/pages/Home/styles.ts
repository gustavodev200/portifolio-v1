import styled from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

export const HomeWrapper = styled.section`
  margin-top: ${pixelToRem(15)};
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  flex-direction: column;
`;

export const TitleHome = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  text-align: start;
  font-size: ${pixelToRem(30)};

  h2 {
    display: flex;
    flex-direction: column;
    span {
      font-size: ${pixelToRem(60)};
    }
    span:nth-child(n + 2) {
      color: transparent;
      -webkit-text-stroke: 1px #fff;
      font-size: ${pixelToRem(40)};
      margin-top: -20px;
    }
  }
  @media ${device.tablet} {
    position: relative;
    top: ${pixelToRem(90)};

    h2 {
      span {
        font-size: ${pixelToRem(80)};
      }
      span:nth-child(n + 2) {
        margin-left: 3px;
        font-size: ${pixelToRem(50)};
      }
    }
  }

  @media ${device.laptopL} {
    h2 {
      span {
        font-size: ${pixelToRem(110)};
      }
      span:nth-child(n + 2) {
        margin-left: 3px;
        font-size: ${pixelToRem(70)};
      }
    }
  }
`;

export const MyPhotoBG = styled.div`
  z-index: 0;
  margin-top: ${pixelToRem(-100)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    position: absolute;
    display: flex;
  }

  img:nth-child(1) {
    z-index: 1;
    width: ${pixelToRem(300)};
  }

  img:nth-child(2) {
    z-index: 1;
    width: ${pixelToRem(150)};
    position: relative;
    margin-left: ${pixelToRem(150)};
  }

  img:nth-child(3) {
    z-index: 0;
    width: ${pixelToRem(250)};
  }

  @media ${device.tablet} {
    position: relative;
    top: ${pixelToRem(-50)};
    img:nth-child(1) {
      width: ${pixelToRem(450)};
    }

    img:nth-child(2) {
      width: ${pixelToRem(225)};
      position: relative;
      margin-left: ${pixelToRem(230)};
    }

    img:nth-child(3) {
      width: ${pixelToRem(360)};
    }
  }
`;

export const ButtonDownloadCV = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    position: absolute;
    z-index: 1;
    background-color: #3888ff;
    padding: 1rem 2rem;
    border-radius: 15px;
    top: -5rem;
    color: #fff;
    font-weight: bold;
    transition: 1s all ease;

    &:hover {
      background-color: #2911ff;
      transform: translate(0, -40%);
      box-shadow: 0 0 60px 0 rgba(0, 0, 200, 0.5);
    }
  }

  @media ${device.tablet} {
    position: relative;
    display: flex;
    justify-content: start;
    top: ${pixelToRem(-100)};
  }

  @media ${device.laptopL} {
    top: ${pixelToRem(-150)};
  }
`;

export const WrapperTags = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: ${pixelToRem(-45)};

  span {
    color: #fff;
    text-align: center;
    opacity: 0.5;
  }

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    align-items: end;
    top: ${pixelToRem(-330)};
    right: ${pixelToRem(20)};
  }

  @media ${device.laptopL} {
    top: ${pixelToRem(-450)};
  }
`;

export const WrapperSocialMedia = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${pixelToRem(-40)};

  a {
    padding: 0 1rem;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover {
      transform: translate(0, -20%);
    }
  }

  @media ${device.tablet} {
    top: ${pixelToRem(-130)};
  }

  @media ${device.laptopL} {
    top: ${pixelToRem(-200)};
  }
`;
