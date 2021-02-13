import { fetchCredits } from "./fetchCredits.js";
import {
  mockCreditsTv,
  mockCreditsMovie,
  mockCreditsPerson,
  amendedMockCreditsTv,
  amendedMockCreditsMovie,
} from "../testHelper.js";

describe("FetchCredits", () => {
  let setCredits;

  beforeEach(() => {
    setCredits = jest.fn();
  });

  it("returns credits for a tv show", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ cast: mockCreditsTv }),
      })
    );

    const credits = await fetchCredits("tv", 123, setCredits);

    expect(credits).toEqual(amendedMockCreditsTv);
    expect(setCredits).toHaveBeenCalledWith(amendedMockCreditsTv);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/tv/123/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
  });

  it("returns credits for a movie", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ cast: mockCreditsMovie }),
      })
    );

    const credits = await fetchCredits("movie", 123, setCredits);

    expect(credits).toEqual(amendedMockCreditsMovie);
    expect(setCredits).toHaveBeenCalledWith(amendedMockCreditsMovie);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/movie/123/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
  });

  it("returns credits for a person", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ cast: mockCreditsPerson }),
      })
    );

    const credits = await fetchCredits("person", 123, setCredits);

    expect(credits).toEqual(mockCreditsPerson);
    expect(setCredits).toHaveBeenCalledWith(mockCreditsPerson);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/person/123/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
  });

  it("returns an empty array when no resolve", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );

    const emptyCredits = await fetchCredits("", 123, setCredits);
    expect(emptyCredits).toEqual([]);
  });
});
