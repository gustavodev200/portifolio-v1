import express from "express";
import cors from "cors";
import { conn } from "./database/conn";
const AdminRoute = require("./routes/AdminRoute");
const ProjectsRoute = require("./routes/ProjectsRoute");

const app = express();
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use(express.static("public"));

app.use("/", AdminRoute);
app.use("/", ProjectsRoute);

app.listen(3333, async () => {
  await conn.sync();
  console.log("Server is running!");
});
