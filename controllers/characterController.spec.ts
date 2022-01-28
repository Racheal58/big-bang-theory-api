import request from "supertest";
import app from "../src/app";

// import mongoose from "mongoose";
// import supertest from "supertest";

const characters = [
  {
    message: "Characters retrieved successfully",
    data: [
      {
        _id: "61ce4184850fb5926b4b4760",
        first_name: "Penny",
        last_name: "Hofstadter",
        gender: "female",
        episode: [],
        created_at: "2021-12-30T23:32:20.542Z",
        __v: 0,
      },
      {
        _id: "61ce30a3edfc385265cb61ce",
        first_name: "Leonard",
        last_name: "Hofstadter",
        gender: "male",
        episode: [],
        created_at: "2021-12-30T22:20:19.442Z",
        __v: 0,
      },
    ],
  },
];

describe("Get all characters request", () => {
  it("should return an array of characters", async () => {
    const result = await request(app)
      .get("/characters")
      .set("Accept", "application/json");

    expect(result.status).toBe(200);
    // expect(result.body.data).toBe(characters);
    expect(Array.isArray(result.body.data)).toBe(true);
  });
});
