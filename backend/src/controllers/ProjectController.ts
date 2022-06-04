import { AddProjects } from "../models/AddProjects";
import cloudinary from "../helpers/cloudinary";
// import upload from "../helpers/image-upload";
const fs = require("fs");

class ProjectController {
  async addProject(req, res) {
    const { title, tag, description } = req.body;
    const imagesUrls: string[] = [];

    const uploader = (path) => cloudinary.uploads(path, "Images");

    if (req.method === "POST") {
      const files = req.files;

      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path);

        imagesUrls.push(newPath);

        fs.unlinkSync(path);
      }

      return imagesUrls;
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
      const newProject = await AddProjects.create({
        image: imagesUrls,
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
