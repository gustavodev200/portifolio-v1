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
  background-color: #ccc;
  border-radius: ${pixelToRem(20)};
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background-color: #000;
    opacity: 0.4;
    transform: scale(1.2);
  }

  @media ${device.tablet} {
    width: 47%;
  }

  @media ${device.laptop} {
    width: 30%;
  }
`;

export const CardContent = styled.div<ImagesProps>`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: flex-end;
  border-radius: ${pixelToRem(20)};
  transition: 0.2s ease-out;
  background: ${(props) => `url(${props.image}) no-repeat center`};
  background-size: cover;

  &:hover {
    background-color: #000;
  }
`;

export const CardDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px 10px 18px 18px;
`;

export const CardButton = styled.div`
  width: 90%;
  padding: 10px 0;
  display: flex;
  align-items: flex-end;
  justify-content: end;
`;

export const LinkProject = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  background-color: #fff;
  border-radius: 5px;
  transition: 0.2s ease-in;

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

export const CardTitle = styled.div`
  width: 90%;
  display: flex;
  padding: 10px 0;
`;
