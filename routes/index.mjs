import { Router } from "express";
import getIndex from "../controllers/indexController.mjs";
import formRouter from "./newMessageForm.mjs";
import messageRouter from "./message.mjs";
const indexRoute = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRoute.use("/message", messageRouter);
indexRoute.use("/new", formRouter);
indexRoute.get("/", getIndex);

export { messages };
export default indexRoute;
