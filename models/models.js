const fs = require("fs/promises");

const readAllExams = async (filterBy, filterTerm, startDate, endDate, next) => {
  try {
    //read local file and parse json
    const allExams = await fs.readFile("./data/exams.json", "UTF8");
    const allExamsArray = JSON.parse(allExams);

    //Filter the exams based on query params
    if (filterBy) {
      // Check if filter_by is a valid property name
      if (!allExamsArray[0].hasOwnProperty(filterBy)) {
        throw new Error(`Invalid filter_by parameter: ${filterBy}`);
      }

      const filteredExams = allExamsArray.filter((exam) => {
        if (filterBy === "Date") {
          // Parse the exam date string into a Date object
          const examDate = new Date(
            exam.Date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")
          );
          // Parse the filter start date string into a Date object
          const startDateObject = new Date(
            startDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")
          );
          // Parse the filter end date string into a Date object
          const endDateObject = new Date(
            endDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")
          );
          // Check if the exam date falls within the filter range
          return (
            examDate.getTime() >= startDateObject.getTime() &&
            examDate.getTime() <= endDateObject.getTime()
          );
        } else {
          // Filter by name or location
          return exam[filterBy]
            .toLowerCase()
            .includes(filterTerm.toLowerCase());
        }
      });

      return filteredExams;
    } else {
      return allExamsArray;
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { readAllExams };
