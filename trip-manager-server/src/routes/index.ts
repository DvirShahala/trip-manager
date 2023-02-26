import express from "express";
import { geoRoute } from "./geo";
import { tripRoute } from "./trips";
import { weatherRoute } from "./weather";

export const routes = express.Router();

routes.use("/trip", tripRoute);
routes.use("/weather", weatherRoute);
routes.use("/geo", geoRoute);
