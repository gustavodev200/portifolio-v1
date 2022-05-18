import { Request, Response } from "express";
import { UserAdmin } from "../models/UserAdmin";
import bcrypt from "bcrypt";

interface IUserAdmin {
  name: string;
  email: string;
  password: string;
}

class UserAdminController {
  async login(req: Request, res: Response) {
    const { email, password }: IUserAdmin = req.body;

    if (!email) {
      res.status(422).json({ message: "O e-mail é obrigatório!" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória!" });
      return;
    }

    const user: any = await UserAdmin.findOne({ where: { email: email } });

    if (!user) {
      res
        .status(422)
        .json({ message: "Não há usuário cadastrado com esse e-mail!" });
      return;
    }

    const checkPassword: string = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      res.status(422).json({ message: "Senha inválida" });
      return;
    }

    return res
      .status(200)
      .json({ message: "Administrador logado com sucesso!", user });
  }

  async create(req: Request, res: Response) {
    const { name, email, password }: IUserAdmin = req.body;

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    try {
      const user = await UserAdmin.create({
        email,
        name,
        password: passwordHash,
      });

      return res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  // static async checkUser(req: Request, res: Response) {
  //   let currentUser;

  //   if (req.headers.authorization) {
  //     const token = getToken(req);
  //     const decoded = jwt.verify(token, process.env.SECRET);

  //     currentUser = await UserAdmin.findOne(decoded.id);

  //     currentUser.password = undefined;
  //   } else {
  //     currentUser = null;
  //   }

  //   res.status(200).send(currentUser);
  // }
}

export default new UserAdminController();
