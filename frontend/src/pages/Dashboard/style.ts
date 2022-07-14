import styled from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

export const DashboardWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
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

  @media ${device.tablet} {
    width: 20%;
  }
`;
export const Profile = styled.div``;
export const NavgationDash = styled.nav``;

export const MainDashboard = styled.main`
  width: 80%;

  @media ${device.tablet} {
    width: 80%;
    height: 100vh;
    background-color: #fff;
  }
`;

export const TitleDash = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  h4 {
    font-size: ${pixelToRem(17)};
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
`;
