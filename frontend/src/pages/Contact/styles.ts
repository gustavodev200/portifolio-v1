import styled from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

export const ContactWrapper = styled.section`
  width: 100%;
  height: auto;

  @media ${device.laptop} {
    height: 100vh;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: ${pixelToRem(40)};

  input[type="submit"] {
    cursor: not-allowed;
  }
`;
