import { AddProjects } from "../models/AddProjects";
import cloudinary from "../helpers/cloudinary";
import { Request, Response } from "express";
// import upload from "../helpers/image-upload";
const fs = require("fs");

class ProjectController {
  async addProject(req: Request, res: Response) {
    const { title, tag, description } = req.body;
    const image = "";

    const uploader = (path) => cloudinary.uploads(path, "Images");

    const imagesUrls: string[] = [];
    const files = req;
    console.log(files);

    for (const file of files) {
      const { path } = file;

      const newPath = await uploader(path);

      imagesUrls.push(newPath);

      console.log(imagesUrls);

      fs.unlinkSync(path);
    }

    if (!imagesUrls) {
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
      const newProject = await AddProjects.create(
        {
          image: "imagesUrls[0]",
          title,
          tag,
          description,
        },
        { raw: true }
      );
      res
        .status(200)
        .json({ message: "Projeto adicionado com sucesso!", newProject });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

export default new ProjectController();
