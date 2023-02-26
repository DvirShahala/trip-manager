import axios from "axios";
import express, { Request, Response } from "express";

export const weatherRoute = express.Router();

weatherRoute.get("/maxMinTemp", async (req: Request, res: Response) => {
  try {
    const lat = req.query.lat;
    const lon = req.query.lon;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    const { data } = await axios.get(
      `${process.env.BASE_WEATHER_API_URL}?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&current_weather=true&start_date=${startDate}&end_date=${endDate}`
    );

    res.status(200);
    res.send(data);
  } catch (e) {
    console.error("error in weather by location", e);
    res.status(400);
    res.send(e);
  }
});

weatherRoute.get("/coordinates", async (req: Request, res: Response) => {
  try {
    const address = req.query.address;

    const { data } = await axios.get(
      `${process.env.BASE_GEOCODING_API_URL}?access_key=${process.env.GEOCODING_API_ACCESS_KEY}&query=${address}`
    );

    res.status(200);
    res.send(data);
  } catch (e) {
    console.error("error in get coordinates", e);
    res.status(404);
    res.send(e);
  }
});
