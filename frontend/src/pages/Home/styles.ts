import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

export const HomeWrapper = styled.section`
  margin-top: ${pixelToRem(30)};
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  flex-direction: column;
`;

export const TitleHome = styled.div`
  width: 100%;
  display: flex;
  text-align: start;
  font-size: ${pixelToRem(30)};

  h2 {
    span:nth-child(n + 2) {
      color: transparent;
      -webkit-text-stroke: 0.5px #fff;
      font-size: ${pixelToRem(25)};
    }
  }
`;
