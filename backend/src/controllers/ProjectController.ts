import { Request, Response } from "express";
import { AddProjects } from "../models/AddProjects";

interface IAddProjects {
  image: string[];
  title: string;
  tag: string;
  description: string;
}
class ProjectController {
  async addProject(req: Request, res: Response) {
    const { image, title, tag, description }: IAddProjects = req.body;

    if (!image) {
      res.status(422).json({ message: "A Imagem é obrigatória!" });
      return;
    }

    if (!title) {
      res.status(422).json({ message: "O título do projeto é obrigatório!" });
      return;
    }

    if (!tag) {
      res.status(422).json({ message: "A TAG do projeto é obrigatório!" });
      return;
    }

    if (!description) {
      res
        .status(422)
        .json({ message: "A descrição do projeto é obrigatório!" });
      return;
    }

    try {
      const newProject = await AddProjects.create({
        image,
        title,
        tag,
        description,
      });
      res
        .status(200)
        .json({ message: "Projeto adicionado com sucesso!", newProject });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

export default new ProjectController();
