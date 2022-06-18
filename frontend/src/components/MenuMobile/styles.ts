import styled, { css } from "styled-components";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

interface Props {
  isVisible?: boolean;
}

export const NavMenuMobile = styled.div`
  display: flex;

  @media ${device.tablet} {
    display: none;
  }
`;

export const ContainerMenu = styled.section<Props>`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.7);

  opacity: 0;
  pointer-events: none;

  > svg {
    position: absolute;
    top: 1.5rem;
    right: 1.4rem;
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      padding: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;

      a {
        font-size: ${pixelToRem(20)};
        color: #fff;
        font-weight: bold;
        transition: 0.2s ease-in-out;
        &:hover {
          color: #3888ff;
        }
      }
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `};
`;
