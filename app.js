//Imports
const express = require("express");
const examRoute = require("./routes/exam");
const { handleServerErrors } = require("./errors");

//Creat new express instance
const app = express();

//add middleware function to parse json
app.use(express.json());

//api routes
app.use("/api/exams", examRoute);

//error handling middleware function
app.use(handleServerErrors);

module.exports = { app };
