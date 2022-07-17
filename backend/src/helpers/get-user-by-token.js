import { UserAdmin } from "../models/UserAdmin";
const res = require("express/lib/response");
const jwt = require("jsonwebtoken");

const getUserByToken = async (token) => {
  if (!token) {
    return res.status(401).json({ message: "Acesso Negado!" });
  }

  const decoded = jwt.verify(token, "nossosecret");

  const userId = decoded.id;

  const user = await UserAdmin.findAll({
    where: { id: userId },
  });

  return user;
};

export { getUserByToken };
