import styled from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

export const DashboardWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const MenuMobileDash = styled.nav`
  display: flex;
  margin: 20px 0 20px 0;
  width: 90%;

  > svg {
    cursor: pointer;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const NavBarDashboard = styled.div`
  display: flex;

  @media ${device.laptop} {
    display: flex;
    justify-content: start;
    width: 20%;
    height: 100vh;
  }
`;

export const Profile = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin-top: ${pixelToRem(30)};

  > div {
    display: none;
  }

  @media ${device.laptop} {
    > div {
      display: flex;
    }
  }
`;
export const NavgationDash = styled.nav``;

export const MainDashboard = styled.main`
  width: 80%;

  @media ${device.laptop} {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-color: #373737;
  }
`;

export const TitleDash = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  h4 {
    font-size: ${pixelToRem(17)};
  }

  @media ${device.laptop} {
    margin-top: ${pixelToRem(10)};
    width: 80%;
    justify-content: start;
    h4 {
      font-size: ${pixelToRem(30)};
    }
  }
`;

export const FormDashboard = styled.form`
  width: 100%;

  @media ${device.laptop} {
    width: 80%;
    input[type="text"] {
      height: ${pixelToRem(40)};
    }

    input[type="submit"] {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    textarea {
      height: ${pixelToRem(130)};
    }
  }
`;

export const ButtonStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${pixelToRem(30)};
  input {
    width: 100%;
    justify-content: center;
  }

  @media ${device.laptop} {
    input {
      width: 20%;
    }
  }
`;
