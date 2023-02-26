import express from "express";
import { tripRoute } from "./trips";
import { weatherRoute } from "./weather";

export const routes = express.Router();

routes.use("/trip", tripRoute);
routes.use("/weather", weatherRoute);
