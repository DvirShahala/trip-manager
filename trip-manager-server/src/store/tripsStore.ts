import { IStore, IStoreTrip } from "../types/store";

export class TripsStore {
  protected trips: {};

  constructor() {
    this.trips = {};
  }

  public upsertTrip(trip: IStoreTrip, id: string) {
    (this.trips as IStore)[id] = trip;
  }

  public getByKey(id: string): IStoreTrip {
    return (this.trips as IStore)[id];
  }

  public getTrips(): IStore {
    return this.trips;
  }

  public deleteFromStore(id: string): void {
    delete (this.trips as IStore)[id];
  }
}
