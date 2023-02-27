import * as React from "react";
import TripCard from "../TripCard/TripCard";
import { useMutation, useQuery } from "react-query";
import { ITrip } from "../../types/types";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddNewTripModal from "./AddNewTripModal";

const Trips: React.FC = () => {
  const [tripsData, setTripsData] = useState<ITrip[] | undefined>([]);
  const [isModalOpen, setisModalOpen] = React.useState(false);

  const { isLoading, error, data } = useQuery("tripsData", () =>
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}${process.env.REACT_APP_TRIPS_ENDPOINT}`
      )
      .then((res) => res.data)
  );

  useEffect(() => {
    setTripsData(data);
  }, [data]);

  const deleteTrip = useMutation((tripId: string) => {
    return axios.delete(
      `${process.env.REACT_APP_BACKEND_BASE_URL}${process.env.REACT_APP_TRIPS_ENDPOINT}/trip`,
      {
        data: {
          id: tripId,
        },
      }
    );
  });

  const handleDeleteTrip = (tripId: string) => {
    deleteTrip.mutate(tripId);
    const updatedTripsData = tripsData!.filter((trip) => {
      return trip.id !== tripId;
    });

    setTripsData(updatedTripsData);
  };

  const clickOpenModal = () => setisModalOpen(true);
  const handleClose = () => setisModalOpen(false);

  return (
    <>
      {isLoading && "Loading..."}
      {error && "An error has occurred"}
      <Button onClick={clickOpenModal}>
        <AddIcon />
      </Button>
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

      <AddNewTripModal
        isModalOpen={isModalOpen}
        setisModalOpen={setisModalOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default Trips;
