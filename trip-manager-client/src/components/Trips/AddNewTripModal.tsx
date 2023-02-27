import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { ReactEventHandler, useState } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useMutation } from "react-query";
import axios from "axios";
import moment from "moment";

interface IPropsAddNewTripModal {
  isModalOpen: boolean;
  handleClose: ReactEventHandler | undefined;
  setisModalOpen: Function;
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  name: "",
  description: "",
  destination: "",
};

const AddNewTripModal: React.FC<IPropsAddNewTripModal> = ({
  isModalOpen,
  handleClose,
  setisModalOpen,
}) => {
  const createTrip = useMutation((tripToCreate: any) => {
    return axios.post(
      `${process.env.REACT_APP_BACKEND_BASE_URL}${process.env.REACT_APP_TRIPS_ENDPOINT}/createTrip`,
      {
        tripToCreate: tripToCreate,
      }
    );
  });

  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleAdd = () => {
    const tripToCreate = {
      startDate,
      endDate,
      ...values,
    };

    createTrip.mutate(tripToCreate);
    setisModalOpen(false);
  };

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create new trip
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          <form>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="name"
              label="name"
              variant="outlined"
              onChange={handleInputChange}
            />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="description"
              label="description"
              variant="outlined"
              onChange={handleInputChange}
            />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              name="destination"
              label="destination"
              variant="outlined"
              onChange={handleInputChange}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="Start date"
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(moment(newValue).format("YYYY-MM-DD"));
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DatePicker
                label="End date"
                value={endDate}
                onChange={(newValue) => {
                  setEndDate(moment(newValue).format("YYYY-MM-DD"));
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button variant="contained" color="primary" onClick={handleAdd}>
              Add
            </Button>
          </form>
        </Typography>
      </Box>
    </Modal>
  );
};

export default AddNewTripModal;
