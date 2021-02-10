import React from "react";
import { shallow, mount } from "enzyme";
import App from "./app";
import Search from "./components/search/search";
import Results from "./components/results/results";
import Details from "./components/details/details";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("search input and button are always displayed", () => {
    const search = wrapper.find(Search);
    expect(search.exists()).toBe(true);
  });

  it("results are initially not displayed", () => {
    const results = wrapper.find(Results);
    expect(results.exists()).toBe(false);
  });

  it("results are displayed after a search is initiated", () => {
    const search = wrapper.find(Search);
    search.prop("onSearch")();

    const results = wrapper.find(Results);
    expect(results.exists()).toBe(true);
  });

  it("details are initially not displayed", () => {
    const details = wrapper.find(Details);
    expect(details.exists()).toBe(false);
  });

  it("details are displayed after onDetails is called", () => {
    const search = wrapper.find(Search);
    search.prop("onSearch")();

    const results = wrapper.find(Results);
    results.prop("onDetails")({ test: "test" });

    const details = wrapper.find(Details);
    expect(details.exists()).toBe(true);
  });
});
