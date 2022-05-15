import express from "express";
import cors from "cors";
import { conn } from "./database/conn";
import router from "./routes/AdminRoute";

const app = express();
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use(express.static("public"));

app.use(router);

app.listen(3333, async () => {
  await conn.sync();
  console.log("Server is running!");
});
