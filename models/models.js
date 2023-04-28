const { client } = require("../db");

const readAllExams = async (next) => {
  try {
    const db = client.db("victvs");
    const allExamsArray = await db.collection("victvs").find().toArray();
    return allExamsArray.sort((a, b) => a.Date - b.Date);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const readExamById = async (examId, next) => {
  try {
    const db = client.db("victvs");
    const examById = await db
      .collection("victvs")
      .findOne({ id: parseInt(examId) });
    console.log(examById);
    return examById;
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { readAllExams, readExamById };
