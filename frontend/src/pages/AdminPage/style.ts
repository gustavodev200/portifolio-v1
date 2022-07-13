import styled from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

export const AdminPageWrapper = styled.section`
  width: 100%;
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  @media ${device.laptop} {
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
  }
`;

export const AdminLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  img {
    width: 90%;
  }

  @media ${device.laptop} {
    width: 40%;
    img {
      width: 80%;
    }
  }
`;

export const AdminForm = styled.div``;

export const AdminHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  h2 {
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: ${pixelToRem(22)};
  }

  @media ${device.laptop} {
    h2 {
      text-align: start;
      font-size: ${pixelToRem(40)};
    }
  }
`;

export const AdminMain = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
  }
`;
