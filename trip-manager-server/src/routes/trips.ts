import express, { Request, Response } from "express";

export const tripRoute = express.Router();

tripRoute.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send("aaa");
});

tripRoute.post("/createTrip", (req: Request, res: Response) => {
  res.status(200);
  res.send();
});

tripRoute.patch("/updateTrip", (req: Request, res: Response) => {
  res.status(200);
  res.send();
});

tripRoute.delete("/trip", (req: Request, res: Response) => {
  res.status(200);
  res.send();
});
