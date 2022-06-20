import { HomeWrapper, MyPhotoBG, TitleHome } from "./styles";
import completed_circle from "../../assets/images/completed_circle.svg";
import mid_circle from "../../assets/images/mid_circle.svg";
import home_img from "../../assets/images/home_img.svg";
import linkedin from "../../assets/images/linkedin.svg";
import dsc from "../../assets/images/dsc.svg";
import insta from "../../assets/images/insta.svg";

const Home = () => {
  return (
    <HomeWrapper className="home">
      <TitleHome>
        <h2>
          <span>GUSTAVO</span>
          <br />
          <span>FULLSTACK</span>
        </h2>
      </TitleHome>
      <MyPhotoBG>
        <img src={completed_circle} alt="Homepage" />
        <img src={mid_circle} alt="Homepage" />
        <img src={home_img} alt="Homepage" />
      </MyPhotoBG>
      <div>
        <span>#HTML, CSS, JAVASCRIPT, FIGMA</span>
        <span>#SASS, STYLED-COMPONENTS</span>
        <span>#GIT, GITHUB, API REST</span>
        <span>#REACT JS</span>
      </div>
      <div>
        <a href="#">
          <img src={linkedin} alt="Ir para Linkedin" />
        </a>
        <a href="#">
          <img src={dsc} alt="Ir para Discord" />
        </a>
        <a href="#">
          <img src={insta} alt="Ir para Instagran" />
        </a>
      </div>
    </HomeWrapper>
  );
};

export default Home;
