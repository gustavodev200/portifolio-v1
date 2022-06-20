import styled from "styled-components";
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
`;
