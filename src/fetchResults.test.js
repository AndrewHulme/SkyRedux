import { fetchResults } from "./fetchResults.js";
import { mockResults } from "./testHelper.js";

describe("FetchResults", () => {
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

    expect(results.results.length).toEqual(3);
    expect(results.results).toEqual(mockResults);
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
