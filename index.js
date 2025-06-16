import express from "express";
import connectData from "./Database/ConnectDb.js";
import Destinations from "./Routes/DestinationRoutes.js";
import topselling from "./Routes/PackageRoutes.js";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/destination", Destinations);
app.use("/api/package", topselling);



connectData()
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`server running on ${port} `);
});
