import styled, { css } from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${pixelToRem(30)};
  width: 100%;
  height: ${pixelToRem(200)};
  background-color: #ccc;
  border-radius: ${pixelToRem(20)};
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: flex-end;
  border-radius: ${pixelToRem(20)};
`;

export const CardDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  opacity: 0.5;
  border-radius: 10px 10px 20px 20px;
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
