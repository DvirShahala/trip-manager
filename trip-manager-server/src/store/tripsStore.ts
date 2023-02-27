import { IStore, ITrip } from "../types/cache";

export class TripsStore {
  protected trips: {};

  constructor() {
    this.trips = {};
  }

  public upsertEntity(trip: ITrip, key: string) {
    (this.trips as IStore)[key] = trip;
  }

  public getByKey(key: string): ITrip {
    return (this.trips as IStore)[key];
  }

  public getTrips(): IStore {
    return this.trips;
  }

  public deleteFromStore(key: string): void {
    delete (this.trips as IStore)[key];
  }
}
