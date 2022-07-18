import styled from "styled-components";
import { device } from "../../styles/responsive";

export const ProjectWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleProjectPage = styled.div`
  width: 100%;
`;

export const CardsWrapper = styled.div`
  width: 100%;

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
  }
`;
