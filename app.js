//Imports
const express = require("express");

//Creat new express instance
const app = express();

//add middleware function to parse json
app.use(express.json());

module.exports = { app };
