import { DataTypes } from "sequelize";
import { conn } from "../database/conn";
import { UserAdmin } from "./UserAdmin";

const AddProjects = conn.define("AddProjects", {
  id: {
    type: DataTypes.INTEGER,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

UserAdmin.hasMany(AddProjects);
AddProjects.belongsTo(UserAdmin);

export { AddProjects };
