// Transform date string from "DD/MM/YYYY" to "MM/DD/YYYY" and parse into a Date object.
const parseExamDate = (exam) => {
  return new Date(exam.Date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
};

const filterExamsByDate = (exams, startDate, endDate) => {
  // Parse the start date string into a Date object
  const startDateObject = new Date(
    startDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")
  );
  // Parse the end date string into a Date object
  const endDateObject = new Date(
    endDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")
  );

  return exams.filter((exam) => {
    const examDate = parseExamDate(exam);
    // Check if the exam date falls within the filter range
    return (
      examDate.getTime() >= startDateObject.getTime() &&
      examDate.getTime() <= endDateObject.getTime()
    );
  });
};

const filterExamsByNameOrLocation = (exams, filterBy, filterTerm) => {
  return exams.filter((exam) => {
    return exam[filterBy].toLowerCase().includes(filterTerm.toLowerCase());
  });
};

module.exports = { filterExamsByDate, filterExamsByNameOrLocation };
