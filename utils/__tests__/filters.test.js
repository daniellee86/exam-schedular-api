const {
  parseExamDate,
  filterExamsByDate,
  filterExamsByNameOrLocation,
} = require("../filters");

const exams = require("../../data/exams.json");

describe("parseExamDate()", () => {
  it("returns a Date object", () => {
    expect(typeof parseExamDate(exams[0])).toBe("object");
  });

  it("returns date in the format 'MM-DD-YYYY'", () => {
    const dateObject = parseExamDate(exams[0]);
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObject.getDate().toString().padStart(2, "0");
    const year = dateObject.getFullYear().toString();
    const dateString = `${month}-${day}-${year}`;
    expect(dateString).toMatch(/^\d{2}-\d{2}-\d{4}$/);
  });

  it("throws an error for invalid input", () => {
    expect(() => parseExamDate({ Date: true })).toThrow();
  });
});

describe("filterExamsByDate", () => {
  it("filters exams by date range", () => {
    const filteredExams = filterExamsByDate(exams, "24/08/2023", "26/08/2023");
    expect(filteredExams).toEqual([
      {
        id: 19,
        Title: "VICTVS20",
        Description: "VICTVS Exam 20",
        Candidateid: 0,
        CandidateName: "Wilmers",
        Date: "25/08/2023 09:30:00",
        LocationName: "London",
        Latitude: 51.5285262,
        Longitude: -0.2664025,
      },
    ]);
  });

  it("returns an empty array when no exams fall within date range", () => {
    const filteredExams = filterExamsByDate(exams, "05/01/2022", "06/01/2022");
    expect(filteredExams).toEqual([]);
  });
});

describe("filterExamsByNameOrLocation", () => {
  it("filters exams by name", () => {
    const filteredExams = filterExamsByNameOrLocation(
      exams,
      "CandidateName",
      "ward"
    );
    expect(filteredExams).toEqual([
      {
        id: 4,
        Title: "VICTVS5",
        Description: "VICTVS Exam 5",
        Candidateid: 2,
        CandidateName: "Ward",
        Date: "05/05/2023 14:30:00",
        LocationName: "Berlin",
        Latitude: 52.520008,
        Longitude: 13.404954,
      },
      {
        id: 11,
        Title: "VICTVS12",
        Description: "VICTVS Exam 12",
        Candidateid: 2,
        CandidateName: "Ward",
        Date: "05/05/2023 14:30:00",
        LocationName: "Berlin",
        Latitude: 52.520008,
        Longitude: 13.404954,
      },
    ]);
  });

  it("filters exams by location", () => {
    const filteredExams = filterExamsByNameOrLocation(
      exams,
      "LocationName",
      "Sydney"
    );
    expect(filteredExams).toEqual([
      {
        id: 1,
        Title: "VICTVS2",
        Description: "VICTVS Exam 2",
        Candidateid: 1,
        CandidateName: "Donnelly",
        Date: "05/05/2023 14:30:00",
        LocationName: "Sydney",
        Latitude: -33.86882,
        Longitude: 151.20929,
      },
    ]);
  });

  it("returns an empty array when no exams match filter term", () => {
    const filteredExams = filterExamsByNameOrLocation(
      exams,
      "CandidateName",
      "english"
    );
    expect(filteredExams).toEqual([]);
  });
});
