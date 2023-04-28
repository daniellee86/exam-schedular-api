//Imports
const express = require("express");
const cors = require("cors");
const examRoute = require("./routes/exam");
const { handleServerErrors } = require("./errors");

//Connect to mongoDb
const { connect } = require("./db");
connect();

//Creat new express instance
const app = express();

//add middleware function to parse json
app.use(express.json());

//middleware to allow CORS (Cross-Origin Resource Sharing)
app.use(cors());

//api routes
app.use("/api/exams", examRoute);

//error handling middleware function
app.use(handleServerErrors);

module.exports = { app };
