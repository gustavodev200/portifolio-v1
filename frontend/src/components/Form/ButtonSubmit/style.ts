import styled from "styled-components";
import pixelToRem from "../../../utils/pxToRem";

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: end;
`;

export const ButtonWrapper = styled.input`
  margin-top: ${pixelToRem(20)};
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding: 20px 50px;
  border: none;
  border-radius: 5px;
  background-color: #3888ff;
  font-weight: bold;
  color: #fff;
  font-size: ${pixelToRem(20)};
  transition: background 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #2911ff;
  }
`;
