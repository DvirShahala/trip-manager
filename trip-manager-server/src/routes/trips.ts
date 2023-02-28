import express, { Request, Response } from "express";
import { TripsStore } from "../store/tripsStore";
import { uuid } from "uuidv4";
import { IStoreTrip } from "../types/store";
import axios from "axios";
import { IweatherRes } from "../types/weatherApi";
import { IFullTrip, ITripFromFE } from "../types/trip";
import { IGeoRes } from "../types/geo";

export const tripRoute = express.Router();

const tripStore = new TripsStore();

tripRoute.get("/", async (req: Request, res: Response) => {
  const trips = tripStore.getTrips();

  try {
    const tripsWithTempPromises: Promise<IFullTrip>[] = Object.values(
      trips
    ).map(async (trip: IStoreTrip) => {
      const { data } = await axios.get<IweatherRes>(
        `${process.env.BASE_WEATHER_API_URL}?latitude=${trip.lat}&longitude=${trip.lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&current_weather=true&start_date=${trip.startDate}&end_date=${trip.endDate}`
      );
      return {
        ...trip,
        maxTemp: data?.daily?.temperature_2m_max[0],
        minTemp: data?.daily?.temperature_2m_min[0],
        unitMeasure: data.daily_units.temperature_2m_max,
      } as IFullTrip;
    });

    const tripsWithTemp = await Promise.all(tripsWithTempPromises);

    res.status(200);
    res.send(tripsWithTemp);
  } catch (e) {
    res.status(400);
    res.send(e);
  }
});

tripRoute.post("/createTrip", async (req: Request, res: Response) => {
  const tripToCreate: ITripFromFE = req.body.tripToCreate;

  try {
    let newTrip: IStoreTrip;

    const { data } = await axios.get<IGeoRes>(
      `${process.env.BASE_GEOCODING_API_URL}?access_key=${process.env.GEOCODING_API_ACCESS_KEY}&query=${tripToCreate.destination}`
    );

    newTrip = {
      ...tripToCreate,
      id: uuid(),
      lon: data?.data?.[0].longitude,
      lat: data?.data?.[0].latitude,
    };

    tripStore.upsertTrip(newTrip, newTrip.id);

    res.status(200);
    res.send(newTrip.id);
  } catch (e) {
    res.status(400);
    res.send(e);
  }
});

tripRoute.delete("/trip", async (req: Request, res: Response) => {
  const idToDelete: string = req.body.id;

  try {
    tripStore.deleteFromStore(idToDelete);

    res.status(200);
    res.send(`The trip ${idToDelete} delete succesfully`);
  } catch (e) {
    res.status(404);
    res.send(e);
  }
});
