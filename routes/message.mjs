import { Router } from "express";
import getMessage from "../controllers/messageController.mjs";

const messageRoute = Router();

messageRoute.get("/", getMessage);

export default messageRoute;
