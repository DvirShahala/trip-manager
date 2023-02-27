export type IStoreTrip = {
  id: string;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  destination: string;
  lon: number;
  lat: number;
};

export type IStore = {
  [key: string]: IStoreTrip;
};
