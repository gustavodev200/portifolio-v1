import styled from "styled-components";
import { device } from "../../../styles/responsive";
import pixelToRem from "../../../utils/pxToRem";

export const InputWrapper = styled.input`
  width: 100%;
  height: ${pixelToRem(60)};
  border-radius: 10px;
  outline: none;
  border: none;
  margin-top: ${pixelToRem(20)};
  font-size: ${pixelToRem(16)};
  font-weight: bold;
  font-family: "Open Sans", sans-serif;

  &::placeholder {
    color: #c4c4c4;
  }

  @media ${device.laptop} {
    font-size: ${pixelToRem(22)};
  }
`;
