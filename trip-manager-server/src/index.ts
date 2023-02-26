import express from "express";
import dotenv from "dotenv";
import { routes } from "./routes/index";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

dotenv.config();

app.use("/api/v1/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening in PORT ${port}`));
