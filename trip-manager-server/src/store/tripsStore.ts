import { IStore, IStoreTrip } from "../types/store";
import { uuid } from "uuidv4";
import { ITripFromUser } from "../types/trip";

export class TripsStore {
  protected trips: {};

  constructor() {
    this.trips = {};
  }

  public createTrip(newTrip: ITripFromUser): string {
    const newTripWithId: IStoreTrip = {
      ...newTrip,
      id: uuid(),
    };

    (this.trips as IStore)[newTripWithId.id] = newTripWithId;

    return newTripWithId.id;
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
