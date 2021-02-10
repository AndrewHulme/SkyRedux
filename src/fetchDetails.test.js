import { fetchDetails } from "./fetchDetails.js";
import { mockDetailsTv } from "./testHelper.js";
import { mockDetailsMovie } from "./testHelper.js";
import { mockDetailsPerson } from "./testHelper.js";

describe("FetchDetails", () => {
  let setDetails;

  beforeEach(() => {
    setDetails = jest.fn();
  });

  it("returns details for a tv show", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockDetailsTv),
      })
    );

    const details = await fetchDetails("tv", "615", setDetails);

    expect(details).toEqual(mockDetailsTv);
    expect(setDetails).toHaveBeenCalledWith(mockDetailsTv);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/tv/615?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
  });

  it("returns details for a movie", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockDetailsMovie),
      })
    );

    const details = await fetchDetails("movie", "491283", setDetails);

    expect(details).toEqual(mockDetailsMovie);
    expect(setDetails).toHaveBeenCalledWith(mockDetailsMovie);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/movie/491283?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
  });

  it("returns details for a person", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockDetailsPerson),
      })
    );

    const details = await fetchDetails("person", "5292", setDetails);

    expect(details).toEqual(mockDetailsPerson);
    expect(setDetails).toHaveBeenCalledWith(mockDetailsPerson);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/person/5292?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
  });
});
