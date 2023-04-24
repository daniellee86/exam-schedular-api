const request = require("supertest");
const { app } = require("../app");
const exams = require("../data/exams.json");

describe("App", () => {
  it("should exist", () => {
    expect(app).toBeDefined();
  });

  it("should reply with status code 200", () => {
    return request(app)
      .get("/api/exams")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        expect(res.req.method).toBe("GET");
      });
  });

  it("should return the correct data for GET /api/exams", async () => {
    return request(app)
      .get("/api/exams")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        expect(res.body).toEqual(exams);
      });
  });

  it("should return a 404 error for undefined routes", async () => {
    return request(app).get("/undefined-route").expect(404);
  });

  it("should sort exams by date by default", () => {
    return request(app)
      .get("/api/exams")
      .expect((res) => {
        const exams = res.body;
        //Create date objects for first and last exam in list
        const earliestExam = new Date(
          exams[0].Date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")
        );
        const latestExam = new Date(
          exams[exams.length - 1].Date.replace(
            /(\d{2})\/(\d{2})\/(\d{4})/,
            "$2/$1/$3"
          )
        );
        //Earliest exam date should come before last exam date.
        const isOrderedByDate = earliestExam < latestExam;
        expect(isOrderedByDate).toEqual(true);
      });
  });

  it("should filter exams according to filterBy and filterTerm queries ", () => {
    return request(app)
      .get("/api/exams?filter_by=CandidateName&filter_term=donnelly")
      .expect((res) => {
        const exams = res.body;
        const expected = [
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
          {
            id: 8,
            Title: "VICTVS9",
            Description: "VICTVS Exam 9",
            Candidateid: 1,
            CandidateName: "Donnelly",
            Date: "05/05/2023 14:30:00",
            LocationName: "Woking",
            Latitude: 51.346118,
            Longitude: -0.546046,
          },
        ];
        expect(expected).toEqual(exams);
      });
  });
});
