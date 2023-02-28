import { IStoreTrip } from "./store";

export interface IFullTrip extends IStoreTrip {
  maxTemp: number;
  minTemp: number;
  unitMeasure: "°C" | "°F";
}

export type ITripFromFE = Omit<IStoreTrip, "id" | "lon" | "lat">;

export type ITripFromUser = Omit<IStoreTrip, "id">;
