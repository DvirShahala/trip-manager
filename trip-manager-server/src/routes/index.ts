import express from "express";
import { tripRoute } from "./trips";

export const routes = express.Router();

routes.use("/trips", tripRoute);
