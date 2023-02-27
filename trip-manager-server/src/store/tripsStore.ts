import { IStore, IStoreTrip } from "../types/store";

export class TripsStore {
  protected trips: {};

  constructor() {
    this.trips = {};
  }

  public upsertEntity(trip: IStoreTrip, key: string) {
    (this.trips as IStore)[key] = trip;
  }

  public getByKey(key: string): IStoreTrip {
    return (this.trips as IStore)[key];
  }

  public getTrips(): IStore {
    return this.trips;
  }

  public deleteFromStore(key: string): void {
    delete (this.trips as IStore)[key];
  }
}
