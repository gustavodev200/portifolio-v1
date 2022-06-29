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
    span {
      font-size: ${pixelToRem(60)};
    }
    span:nth-child(n + 2) {
      color: transparent;
      -webkit-text-stroke: 1px #fff;
      font-size: ${pixelToRem(40)};
    }
  }
`;

export const MyPhotoBG = styled.div`
  z-index: 0;
  margin-top: ${pixelToRem(-150)};
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

  /* @media ${device.tablet} {
    img:nth-child(1) {
      width: ${pixelToRem(400)};
    }

    img:nth-child(2) {
      width: ${pixelToRem(200)};
      position: relative;
      margin-left: ${pixelToRem(200)};
    }

    img:nth-child(3) {
      width: ${pixelToRem(300)};
    }
  } */
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
    width: 100%;
    text-align: center;
    opacity: 0.5;
  }
`;

export const WrapperSocialMedia = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${pixelToRem(-100)};

  a {
    padding: 0 1rem;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
