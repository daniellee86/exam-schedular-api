const fs = require("fs/promises");
// const {
//   filterExamsByDate,
//   filterExamsByNameOrLocation,
// } = require("../utils/filters");

const readAllExams = async (next) => {
  // filterBy, filterTerm, startDate, endDate,
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

module.exports = { readAllExams };

//DONT NEED THIS SERVER SIDE LOGIC - FILTERING WILL HAPPEN CLIENT SIDE FOR THIS PROJECT

/*   
   //Filter the exams based on query params
   if (filterBy) {
     // Check if filterBy is a valid property name
     if (!allExamsArray[0].hasOwnProperty(filterBy)) {
       throw new Error(`Invalid filter_by parameter: ${filterBy}`);
     }

     if (filterBy === "Date") {
       const filteredByDate = filterExamsByDate(
         allExamsArray,
         startDate,
         endDate
       );
       //Return exams filtered and sorted by Date
       return filteredByDate.sort((a, b) => a.Date - b.Date);
     } else {
       const filteredByNameOrLocation = filterExamsByNameOrLocation(
         allExamsArray,
         filterBy,
         filterTerm
       );
       //Return exams filtered by name or location and sorted by date
       return filteredByNameOrLocation.sort((a, b) => a.Date - b.Date);
     }
   } else {
     //Return all exams sorted by date
     return allExamsArray.sort((a, b) => a.Date - b.Date);
    
   } */
