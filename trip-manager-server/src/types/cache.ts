export interface ITrip {
  id: string;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  maxTemp: number;
  minTemp: number;
}

export interface IStore {
  [key: string]: ITrip;
}
