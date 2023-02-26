import express, { Request, Response } from "express";

export const weatherRoute = express.Router();

weatherRoute.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send("bbb");
});
