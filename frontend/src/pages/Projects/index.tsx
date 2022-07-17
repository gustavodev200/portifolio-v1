import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import Title from "../../components/Title";
import api from "../../utils/api";
import { CardsWrapper, ProjectWrapper, TitleProjectPage } from "./styles";

// type ProjectProps = {
//   myProjects: string[];
//   setMyProjects: Dispatch<SetStateAction<[]>>;
// };

const Projects = () => {
  const [myProjects, setMyProjects] = useState<any[]>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProject = () => {
    api
      .get("/")
      .then((response) => {
        return setMyProjects(response.data.projects);
      })
      .catch((error) => {
        return new Error(error);
      });

    return myProjects;
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <ProjectWrapper id="projects">
      <TitleProjectPage>
        <Title firstText="PROJETOS" secondText="GUSTAVO" />
      </TitleProjectPage>
      <CardsWrapper>
        {myProjects.map((project) => (
          <Cards
            key={project.id}
            title={project.title}
            tag={project.tag}
            link={project.link}
            image={project.image}
            description={project.description}
          />
        ))}
      </CardsWrapper>
    </ProjectWrapper>
  );
};

export default Projects;

/* <CardsWrapper>
  <Cards
    title={project.title}
    tag={project.tag}
    link={project.link}
    image={project.image}
    description={project.description}
  />
</CardsWrapper>; */
