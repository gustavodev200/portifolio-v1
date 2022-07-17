import { AddProjects } from "../models/AddProjects";
import cloudinary from "../helpers/cloudinary";
import { Request, Response } from "express";
const fs = require("fs");

class ProjectController {
  async addProject(req: Request, res: Response) {
    const { title, tag, description, link } = req.body;

    const uploader = async (path) => await cloudinary.uploads(path, "Images");

    const imagesUrls = [];
    let imageCloudinaryURL: string = "";
    const files = req.file;

    if (files === undefined || null || 0) {
      res.status(422).json({ message: "A Imagem é obrigatória!" });
      return;
    }

    const { path } = files;

    const newPath = await uploader(path);

    imagesUrls.push(newPath);

    fs.unlinkSync(path);

    for (const urlCloudnary of imagesUrls) {
      const { url } = urlCloudnary;

      imageCloudinaryURL = String(url);
    }

    if (imagesUrls.length === undefined || null || 0) {
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

    if (!link) {
      res.status(422).json({ message: "O Link do projeto é obrigatório!" });
      return;
    }

    try {
      const newProject = await AddProjects.create(
        {
          image: imageCloudinaryURL,
          title,
          tag,
          description,
          link,
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

  async allProjects(req: Request, res: Response) {
    const projects = await AddProjects.findAll();

    res.status(200).json({ projects });
  }
}

export default new ProjectController();
