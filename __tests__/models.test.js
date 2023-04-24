const fs = require("fs/promises");
const {
  filterExamsByDate,
  filterExamsByNameOrLocation,
} = require("../utils/filters");
const { readAllExams } = require("../models/models");

describe("readAllExams function", () => {
  let allExamsArray;

  beforeAll(async () => {
    // Load test data from file
    const allExams = await fs.readFile("./data/exams.json", "UTF8");
    allExamsArray = JSON.parse(allExams);
  });

  it("returns all exams when no filters are specified", async () => {
    // Arrange
    const expected = allExamsArray;

    // Act
    const result = await readAllExams();

    // Assert
    expect(result).toEqual(expected);
  });

  it("returns exams filtered by name", async () => {
    // Arrange
    const filterBy = "CandidateName";
    const filterTerm = "donnelly";
    const expected = allExamsArray.filter((exam) =>
      exam[filterBy].toLowerCase().includes(filterTerm.toLowerCase())
    );

    // Act
    const result = await readAllExams(filterBy, filterTerm);

    // Assert
    expect(result).toEqual(expected);
  });

  it("returns exams filtered by location", async () => {
    // Arrange
    const filterBy = "LocationName";
    const filterTerm = "London";
    const expected = allExamsArray.filter((exam) =>
      exam[filterBy].includes(filterTerm)
    );

    // Act
    const result = await readAllExams(filterBy, filterTerm);

    // Assert
    expect(result).toEqual(expected);
  });

  it("returns exams filtered by date", async () => {
    // Arrange
    const filterBy = "Date";
    const startDate = "2022-01-01";
    const endDate = "2022-06-30";
    const expected = filterExamsByDate(allExamsArray, startDate, endDate);

    // Act
    const result = await readAllExams(filterBy, null, startDate, endDate);

    // Assert
    expect(result).toEqual(expected);
  });
});
