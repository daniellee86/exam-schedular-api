const fs = require("fs/promises");

const readAllExams = async (next) => {
  try {
    //read local file and parse json
    const allExams = await fs.readFile("./data/exams.json", "UTF8");
    const allExamsArray = JSON.parse(allExams);
    return allExamsArray.sort((a, b) => a.Date - b.Date);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const readExamById = async (examId, next) => {
  try {
    //(CANT QUERY A LOCAL JSON FILE)
    const allExams = await fs.readFile("./data/exams.json", "UTF8");
    const allExamsArray = JSON.parse(allExams);
    const examById = allExamsArray.filter((exam) => {
      return parseInt(examId) === exam.id;
    });
    console.log(examById);
    return examById;
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { readAllExams, readExamById };
