import styled from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

type ImagesProps = {
  image: string;
};

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${pixelToRem(30)};
  width: 100%;
  height: ${pixelToRem(200)};
  background-color: #000;
  border-radius: ${pixelToRem(20)};
  cursor: pointer;
  transition: 0.2s ease-out;
  z-index: 0;

  &:hover {
    transform: scale(1.1);
  }

  @media ${device.tablet} {
    width: 47%;
  }

  @media ${device.laptop} {
    width: 30%;
  }
`;

export const CardDescription = styled.figcaption`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 90%;
  height: 80%;
  opacity: 0;
  transition: opacity 300ms, left 300ms;
  z-index: 1;
`;

export const CardContent = styled.div<ImagesProps>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: ${pixelToRem(20)};
  transition: 0.2s ease-out;
  background: ${(props) => `url(${props.image}) no-repeat center`};
  background-size: cover;
  z-index: 0;
`;

export const CardDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px 10px 18px 18px;
  z-index: 0;
  transition: background height 1s ease-out;

  span {
    width: 90%;
    display: none;
    color: #fff;
    font-size: ${pixelToRem(10)};
  }

  &:hover {
    height: 100%;

    span {
      display: flex;
    }
  }

  @media ${device.laptop} {
    span {
      font-size: ${pixelToRem(13)};
    }
  }
`;

export const CardTitle = styled.div`
  width: 90%;
  display: flex;
  padding: 10px 0;
  z-index: 0;
`;

export const CardButton = styled.div`
  width: 90%;
  padding: 10px 0;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  z-index: 0;
`;

export const LinkProject = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  background-color: #fff;
  border-radius: 5px;
  transition: 0.2s ease-in;
  z-index: 0;

  svg {
    color: #000;
  }

  &:hover {
    background-color: #3888ff;

    svg {
      color: white;
    }
  }
`;
