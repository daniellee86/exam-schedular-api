const { readAllExams, readExamById } = require("../models/models");

const fetchAllExams = async (req, res, next) => {
  try {
    const allExamsArray = await readAllExams();
    res.status(200).send(allExamsArray);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const fetchExamById = async (req, res, next) => {
  const examId = req.params.id;
  try {
    const examById = await readExamById(examId);
    res.status(200).send(examById);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { fetchAllExams, fetchExamById };
