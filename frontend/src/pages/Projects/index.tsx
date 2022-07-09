import Cards from "../../components/Cards";
import Title from "../../components/Title";
import { CardsWrapper, ProjectWrapper, TitleProjectPage } from "./styles";

const Projects = () => {
  return (
    <ProjectWrapper id="projects">
      <TitleProjectPage>
        <Title firstText="PROJETOS" secondText="GUSTAVO" />
      </TitleProjectPage>
      <CardsWrapper>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </CardsWrapper>
    </ProjectWrapper>
  );
};

export default Projects;
