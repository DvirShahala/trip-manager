import * as React from "react";
import TripCard from "../TripCard/TripCard";
import { useMutation, useQuery } from "react-query";
import { ITrip } from "../../types/types";
import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface IPropsTrips {}

const Trips: React.FC<IPropsTrips> = ({}) => {
  const [tripsData, setTripsData] = useState<ITrip[] | undefined>([]);

  const { isLoading, error, data } = useQuery<ITrip[]>("tripsData", () =>
    fetch("http://localhost:4000/api/v1/trips").then((res) => res.json())
  );

  console.log("trippppp", tripsData);

  useEffect(() => {
    console.log("dataaaa", data);

    setTripsData(data);
  }, [data]);

  const deleteTrip = useMutation((tripId: string) => {
    return axios.delete("http://localhost:4000/api/v1/trips/trip", {
      data: {
        id: tripId,
      },
    });
  });

  const handleDeleteTrip = (tripId: string) => {
    deleteTrip.mutate(tripId);
    const updatedTripsData = tripsData!.filter((trip) => {
      return trip.id !== tripId;
    });

    setTripsData(updatedTripsData);
  };

  return (
    <>
      {isLoading && "Loading..."}
      {error && "An error has occurred"}
      {tripsData?.length && (
        <Grid container md={"auto"} justifyContent="center">
          {tripsData.map((trip: ITrip) => {
            return (
              <Grid key={trip.id}>
                <TripCard
                  id={trip.id}
                  title={trip.name}
                  description={trip?.description}
                  startDate={trip.startDate}
                  endDate={trip.endDate}
                  maxTemp={trip.maxTemp}
                  minTemp={trip.minTemp}
                  deleteTrip={handleDeleteTrip}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Trips;
