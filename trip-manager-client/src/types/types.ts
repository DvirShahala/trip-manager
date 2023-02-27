export type ITrip = {
  id: string;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  destination: string;
  lon: number;
  lat: number;
  minTemp: number;
  maxTemp: number;
};
