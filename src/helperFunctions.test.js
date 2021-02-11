import { convertName } from "./helperFunctions.js";

describe("FetchCredits", () => {
  it("returns multi when given All", () => {
    expect(convertName("All")).toEqual("multi");
  });

  it("returns person when given Actors", () => {
    expect(convertName("Actors")).toEqual("person");
  });

  it("returns movie when given Movies", () => {
    expect(convertName("Movies")).toEqual("movie");
  });

  it("returns tv when given TV Shows", () => {
    expect(convertName("TV Shows")).toEqual("tv");
  });
});
