const fs = require("fs/promises");
const {
  filterExamsByDate,
  filterExamsByNameOrLocation,
} = require("../utils/filters");

const readAllExams = async (filterBy, filterTerm, startDate, endDate, next) => {
  try {
    //read local file and parse json
    const allExams = await fs.readFile("./data/exams.json", "UTF8");
    const allExamsArray = JSON.parse(allExams);

    //Filter the exams based on query params
    if (filterBy) {
      // Check if filterBy is a valid property name
      if (!allExamsArray[0].hasOwnProperty(filterBy)) {
        throw new Error(`Invalid filter_by parameter: ${filterBy}`);
      }

      if (filterBy === "Date") {
        return filterExamsByDate(allExamsArray, startDate, endDate);
      } else {
        return filterExamsByNameOrLocation(allExamsArray, filterBy, filterTerm);
      }
    } else {
      return allExamsArray;
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { readAllExams };
