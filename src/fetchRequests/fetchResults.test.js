import { fetchResults } from "./fetchResults.js";
import {
  mockResults,
  mockFilterDetailsPerson,
  amendedMockFilterDetailsPerson,
} from "../testHelper.js";

describe("FetchResults", () => {
  describe("unfiltered results using multi", () => {
    let setResults;

    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ results: mockResults }),
        })
      );

      setResults = jest.fn();
    });

    it("returns results", async () => {
      const results = await fetchResults("simpsons", setResults);

      expect(results.length).toEqual(3);
      expect(results).toEqual(mockResults);
    });

    it("calls setResults function", async () => {
      await fetchResults("simpsons", setResults);
      expect(setResults).toHaveBeenCalledWith(mockResults);
    });

    it("calls with the correct URL", async () => {
      await fetchResults("simpsons", setResults);
      expect(global.fetch).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&query=simpsons`
      );
    });
  });

  describe("filtered results using person", () => {
    let setResults;

    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ results: mockFilterDetailsPerson }),
        })
      );

      setResults = jest.fn();
    });

    it("calls setResults function", async () => {
      await fetchResults("denzel", setResults, "Actors");
      expect(setResults).toHaveBeenCalledWith(amendedMockFilterDetailsPerson);
    });

    it("calls with the correct URL", async () => {
      await fetchResults("denzel", setResults, "Actors");
      expect(global.fetch).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_KEY}&query=denzel`
      );
    });
  });

  describe("when no resolve", () => {
    let setResults;

    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({}),
        })
      );

      setResults = jest.fn();
    });

    it("returns an empty array", async () => {
      const emptyResults = await fetchResults("", setResults, "");
      expect(emptyResults).toEqual([]);
    });
  });
});
