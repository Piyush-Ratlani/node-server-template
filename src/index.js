require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", true);
mongoose.connect(MONGO_URI);
const database = mongoose.connection;

database.on("error", err => console.log(err));
database.once("connected", () => console.log("Database connected."));

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log("Listening on PORT:", PORT));
app.use(cors({ origin: "*" }));
