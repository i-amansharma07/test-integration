import { describe, it, expect, beforeEach } from "vitest";
import app from "../server";
import request from "supertest";

describe("POST /sum", () => {
  beforeEach(async () => {
    // Clear the database before each test
  });

  it("should return all the stored sums", async () => {
    const { status, body } = await request(app).get("/");

    console.log("body is : ", body);

    expect(status).toBe(200);
    expect(body.length).toBe(0);
  });

  it("should sum add 2 numbers", async () => {
    const { status, body } = await request(app).post("/sum").send({
      a: 45,
      b: 6,
    });

    console.log("body is : ", body);

    expect(status).toBe(200);
    expect(body).toEqual({ answer: 51, id: expect.any(Number) });
  });
});
