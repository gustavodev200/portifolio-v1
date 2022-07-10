import { AboutWrapper, ImgAbout, MainAbout, TechsStyles } from "./styles";
import about_img from "../../assets/images/about_img.svg";
import Title from "../../components/Title";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiSass,
  SiStyledcomponents,
  SiGit,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const About = () => {
  return (
    <>
      <AboutWrapper id="about">
        <MainAbout>
          <Title firstText="SOBRE" secondText="GUSTAVO" />
          <p>
            Menos de um ano nos estudos de Desenvolvimento Frontend, no qual
            busco sempre me adaptar e buscar desafios para evoluir cada vez
            mais. Não possui experiência no mercado como desenvolvedor, mais sim
            em Suporte d TI, no qual comecei como Junior e atualmente sou Pleno,
            isso mostra que entrei na empresa para somar, pois isso que priorizo
            em minha carreira, sempre dar o meu melhor em qualquer área ou
            desafio. Busco entrar no mercado de trabalho como desenvolvedor
            frontend, possuo conhecimento em: HTML, CSS, SASS, Styled
            Components, React JS, Javascript, Typescript, API REST.
            <br /> Eu me identifico muito com os princípios de design
            responsivo, pois como essas telas Web se encolhem e se adéquam em
            diferentes dispositivos móveis sem perder o brilho da tela, eu sou
            uma pessoa moldável e adaptável que consegue manter o brilho em
            diferentes circunstâncias.
          </p>
          <TechsStyles>
            <SiHtml5 color="#ff6600" fontSize={50} />
            <SiCss3 color="#3888ff" fontSize={50} />
            <SiJavascript color="#e5ff00" fontSize={50} />
            <SiTypescript color="#0046af" fontSize={50} />
            <SiReact color="#3d8bff" fontSize={50} />
            <SiStyledcomponents color="#ff39e5" fontSize={50} />
            <SiSass color="#ff3838" fontSize={50} />
            <SiGit color="#c98200" fontSize={50} />
            <SiNodedotjs color="#00a336" fontSize={50} />
            <SiExpress color="#b8b8b8" fontSize={50} />
          </TechsStyles>
        </MainAbout>
        <ImgAbout>
          <img src={about_img} alt="Sobre mim" />
        </ImgAbout>
      </AboutWrapper>
    </>
  );
};

export default About;
