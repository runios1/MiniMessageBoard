import { Router } from "express";
import getForm, {
  postNewMessage,
} from "../controllers/newMessageFormController.mjs";

const formRoute = Router();

formRoute.get("/", getForm);
formRoute.post("/", postNewMessage);

export default formRoute;
