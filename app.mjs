import express from "express";
const app = express();

import { join } from "node:path";

app.set("views", join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

import indexRouter from "./routes/index.mjs";
app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
