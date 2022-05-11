import express from "express";
import cors from "cors";
import router from "./routes/AdminRoute";
import { conn } from "./database/conn";

const app = express();
app.use(express.json());

app.use(router);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use(express.static("public"));

app.listen(3333, async () => {
  await conn.sync();
  console.log("Server is running!");
});
