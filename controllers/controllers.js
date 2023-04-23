const { readAllExams } = require("../models/models");

const fetchAllExams = async (req, res, next) => {
  try {
    const allExamsArray = await readAllExams();
    res.status(200).send(allExamsArray);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { fetchAllExams };
