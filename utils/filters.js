// JavaScript Date() constructor expects the date in the format "MM/DD/YYYY".
const parseExamDate = (exam) => {
  if (!exam || typeof exam !== "object" || typeof exam.Date !== "string") {
    throw new Error("Invalid input");
  }
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

module.exports = {
  filterExamsByDate,
  filterExamsByNameOrLocation,
  parseExamDate,
};
