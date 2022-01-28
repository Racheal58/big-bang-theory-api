/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { characterRoute } from "../routes/Character";
// import { Mongoose, connect } from "mongoose";
const mongoose = require("mongoose");

dotenv.config();

/**
 * App Variables
 */
// if (!process.env.PORT) {
//   process.exit(1);
// }

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(cors());
app.use(express.json());

// connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  return console.log("connected to DB");
});

app.use("/", characterRoute());

/**
 * Server Activation
 */
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

export default app;
