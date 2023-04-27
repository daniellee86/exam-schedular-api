const examRouter = require("express").Router();
const { fetchAllExams, fetchExamById } = require("../controllers/controllers");

//Get all exams
examRouter.get("/", fetchAllExams);

//Get exam by id
examRouter.get("/:id", fetchExamById);

module.exports = examRouter;
