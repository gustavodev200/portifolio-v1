import {
  ButtonDownloadCV,
  HomeWrapper,
  MyPhotoBG,
  TitleHome,
  WrapperSocialMedia,
  WrapperTags,
} from "./styles";
import completed_circle from "../../assets/images/completed_circle.svg";
import mid_circle from "../../assets/images/mid_circle.svg";
import home_img from "../../assets/images/home_img.svg";
import linkedin from "../../assets/images/linkedin.svg";
import dsc from "../../assets/images/dsc.svg";
import insta from "../../assets/images/insta.svg";

const Home = () => {
  return (
    <HomeWrapper id="home">
      <TitleHome>
        <h2>
          <span>GUSTAVO</span>
          <span>FRONTEND</span>
        </h2>
      </TitleHome>

      <MyPhotoBG>
        <img src={completed_circle} alt="Homepage" />
        <img src={mid_circle} alt="Homepage" />
        <img src={home_img} alt="Homepage" />
      </MyPhotoBG>

      <ButtonDownloadCV>
        <a
          href="https://drive.google.com/u/0/uc?id=1tyb8AMApqErC2sbWatFW1MIBbnbAZOU0&export=download"
          download
        >
          DOWNLOAD CV
        </a>
      </ButtonDownloadCV>

      <WrapperTags>
        <span>#HTML, CSS, JAVASCRIPT, FIGMA</span>
        <span>#SASS, STYLED-COMPONENTS</span>
        <span>#GIT, GITHUB, API REST</span>
        <span>#REACT JS</span>
      </WrapperTags>

      <WrapperSocialMedia>
        <a href="https://www.linkedin.com/in/gustavo-lage/" target="_blank">
          <img src={linkedin} alt="Ir para Linkedin" />
        </a>
        <a href="https://discord.gg/ZeYTJzPFUd" target="_blank">
          <img src={dsc} alt="Ir para Discord" />
        </a>
        <a href="https://www.instagram.com/gustavo_lage01/" target="_blank">
          <img src={insta} alt="Ir para Instagran" />
        </a>
      </WrapperSocialMedia>
    </HomeWrapper>
  );
};

export default Home;
