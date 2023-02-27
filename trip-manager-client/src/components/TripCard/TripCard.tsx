import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

interface IPropsTripCard {
  id: string;
  title: string;
  description?: string;
  startDate: string | Date;
  endDate: string | Date;
  maxTemp: number;
  minTemp: number;
  deleteTrip: Function;
}

const TripCard: React.FC<IPropsTripCard> = ({
  id,
  title,
  description,
  startDate,
  endDate,
  maxTemp,
  minTemp,
  deleteTrip,
}) => {
  return (
    <Card sx={{ marginLeft: "10px", minWidth: "220px", marginTop: "10%" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        {description && (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
          </Typography>
        )}
        <Typography variant="body2">
          <>
            {startDate} - {endDate}
          </>
        </Typography>
        <Typography variant="body2">
          <>
            Temp: {minTemp} - {maxTemp}
          </>
        </Typography>
        <CardActions>
          <Button
            size="small"
            color="warning"
            onClick={() => {
              deleteTrip(id);
            }}
          >
            Delete
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default TripCard;
