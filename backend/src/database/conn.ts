import { Sequelize } from "sequelize";

export const conn = new Sequelize(
  process.env.DATABASE_DB,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
  }
);
