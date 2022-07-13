import styled from "styled-components";
import not_found from "../../assets/images/not_found.svg";
import { device } from "../../styles/responsive";
import pixelToRem from "../../utils/pxToRem";

const NotFound = () => {
  return (
    <PageNotFound>
      <LinkWrapper>
        Retornar à Home
        <br />
        <a href="/">Clique aqui!</a>
      </LinkWrapper>
      <NotWrapper>
        <img src={not_found} alt="Page Not Found" />
        <h4>Página não encontrada</h4>
      </NotWrapper>
    </PageNotFound>
  );
};

const PageNotFound = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    padding: ${pixelToRem(20)};
    background-color: #ffffff;
    border-radius: 20px;
    width: 50%;
  }

  h4 {
    margin-top: 10px;
  }

  @media ${device.laptop} {
    img {
      width: 30%;
    }
  }
`;

const LinkWrapper = styled.a`
  color: #fff;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;

  a {
    text-decoration: underline;
  }
`;

const NotWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default NotFound;
