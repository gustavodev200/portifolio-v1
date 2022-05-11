import { Request, Response } from "express";
import { UserAdmin } from "../models/UserAdmin";

class UserAdminController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = await UserAdmin.create({
      email,
      name,
      password,
    });
    return res.status(201).json(user);
  }
}

export default new UserAdminController();
