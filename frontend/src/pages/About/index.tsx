import { AboutWrapper, ImgAbout, MainAbout, TitleAbout } from "./styles";
import about_img from "../../assets/images/about_img.svg";

const About = () => {
  return (
    <AboutWrapper id="about">
      <MainAbout>
        <TitleAbout>
          <h2>
            <span>SOBRE</span>
            <span>GUSTAVO</span>
          </h2>
        </TitleAbout>
        <p>
          Biografia e use como inspiração e não como comparação. Você é peça
          única! 5 Acredite. Se você é ateu, acredite no seu poder de realizar.
          Se tem religião, ou simpatia por uma, acredite no seu “Deus”, mas não
          deixe de criar. Não espere que uma oração vá fazer o que precisa ser
          feito. Vamos iniciar o desenvolvimento de uma aplicação React com base
          no que foi gerado no post anterior. Durante o desenvolvimento, serão
          explicados os conceitos por trás da implementação e sempre serão
          sugeridas as boas
        </p>
      </MainAbout>
      <ImgAbout>
        <img src={about_img} alt="Sobre mim" />
      </ImgAbout>
    </AboutWrapper>
  );
};

export default About;
