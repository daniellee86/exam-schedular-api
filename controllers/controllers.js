const { readAllExams } = require("../models/models");

const fetchAllExams = async (req, res, next) => {
  const { filter_by, filter_term, start_date, end_date } = req.query;

  try {
    const allExamsArray = await readAllExams(
      filter_by,
      filter_term,
      start_date,
      end_date
    );
    res.status(200).send(allExamsArray);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { fetchAllExams };
