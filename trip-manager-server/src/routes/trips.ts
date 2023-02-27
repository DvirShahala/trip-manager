import express, { Request, Response } from "express";
import { TripsStore } from "../store/tripsStore";
import { uuid as uuidv4 } from "uuidv4";

export const tripRoute = express.Router();

const tripCache = new TripsStore();

tripRoute.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send(tripCache.getTrips());
});

tripRoute.post("/createTrip", (req: Request, res: Response) => {
  const newTrip = req.body.newTrip;

  tripCache.upsertEntity(newTrip, newTrip.id);
  res.status(200);
  res.send(newTrip.id);
});

tripRoute.delete("/trip", (req: Request, res: Response) => {
  tripCache.deleteFromStore(req.body.tripId);
  res.status(200);
  res.send();
});

// TODO
tripRoute.patch("/updateTrip", (req: Request, res: Response) => {
  res.status(200);
  res.send();
});
