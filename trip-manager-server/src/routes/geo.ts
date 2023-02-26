import axios from "axios";
import express, { Request, Response } from "express";

export const geoRoute = express.Router();

geoRoute.get("/coordinates", async (req: Request, res: Response) => {
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
