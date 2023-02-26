import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

interface IPropsCard {
  title: string;
  description: string;
  startDate: string | Date;
  endDate: string | Date;
  maxTemp: number;
  minTemp: number;
}

const TripCard: React.FC<IPropsCard> = ({
  title,
  description,
  startDate,
  endDate,
  maxTemp,
  minTemp,
}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
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
          <Button size="small" color="warning">
            Delete
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default TripCard;
