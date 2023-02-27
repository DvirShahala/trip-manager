import * as React from "react";
import TripCard from "../TripCard/TripCard";
import { useQuery } from "react-query";
import { ITrip } from "../../types/types";

interface IPropsTrips {}

const Trips: React.FC<IPropsTrips> = ({}) => {
  const { isLoading, error, data } = useQuery("tripsData", () =>
    fetch("http://localhost:4000/api/v1/trips").then((res) => res.json())
  );

  console.log("data", data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;

  return (
    data &&
    data.map((trip: ITrip) => {
      <TripCard
        title={trip.name}
        description={trip?.description}
        startDate={trip.startDate}
        endDate={trip.endDate}
        maxTemp={trip.maxTemp}
        minTemp={trip.minTemp}
      />;
    })
  );
};

export default Trips;
