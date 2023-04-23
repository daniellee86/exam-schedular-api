const fs = require("fs/promises");

const readAllExams = async () => {
  try {
    const allExams = await fs.readFile("./data/exams.json", "UTF8");
    const allExamsArray = JSON.parse(allExams);
    return allExamsArray;
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { readAllExams };
