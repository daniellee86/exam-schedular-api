const examRouter = require("express").Router();
const { fetchAllExams } = require("../controllers/controllers");

//Get all exams
examRouter.get("/", fetchAllExams);

module.exports = examRouter;
