import express from "express";

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`API running at port ${process.env.PORT}`);
});
