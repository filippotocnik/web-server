const request = require("supertest");
const app = require("../app");

describe("Homepage", () => {
  it("Renders posts", done => {
    request(app)
      .get("/")
      .expect(200)
      .expect(/title/, done);
  });

  it("Renders single post", done => {
    request(app)
      .get("/post/1")
      .expect(200)
      .expect(/body/, done);
  });
});
