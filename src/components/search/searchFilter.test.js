import React from "react";
import { shallow } from "enzyme";
import SearchFilter from "./searchFilter";

describe("SearchFilter", () => {
  it("shows a button initially called 'All'", () => {
    const wrapper = shallow(<SearchFilter />);
    const filterSelect = wrapper.find("select");

    const defaultOption = filterSelect.find("option").at(0);
    expect(defaultOption.text()).toBe("All");
  });

  it("should have a button for each type of filter on dropdown", () => {
    const wrapper = shallow(<SearchFilter />);
    const filterSelect = wrapper.find("select");

    const firstOption = filterSelect.find("option").at(1);
    const secondOption = filterSelect.find("option").at(2);
    const thirdOption = filterSelect.find("option").at(3);

    expect(firstOption.text()).toBe("Actors");
    expect(secondOption.text()).toBe("Movies");
    expect(thirdOption.text()).toBe("TV Shows");
  });

  it("should change type of search when clicking on filter All button", () => {
    const setFilterFor = jest.fn();
    const wrapper = shallow(<SearchFilter setFilterFor={setFilterFor} />);

    const button = wrapper.find("#filterSelect");
    button.simulate("click");

    wrapper.find("#filterAll").simulate("click");

    expect(setFilterFor).toHaveBeenCalledWith("All");
  });

  it("should change type of search when clicking on filter Actors button", () => {
    const setFilterFor = jest.fn();
    const wrapper = shallow(<SearchFilter setFilterFor={setFilterFor} />);

    const button = wrapper.find("#filterSelect");
    button.simulate("click");

    wrapper.find("#filterActors").simulate("click");

    expect(setFilterFor).toHaveBeenCalledWith("Actors");
  });

  it("should change type of search when clicking on filter Movies button", () => {
    const setFilterFor = jest.fn();
    const wrapper = shallow(<SearchFilter setFilterFor={setFilterFor} />);

    const button = wrapper.find("#filterSelect");
    button.simulate("click");

    wrapper.find("#filterMovies").simulate("click");

    expect(setFilterFor).toHaveBeenCalledWith("Movies");
  });

  it("should change type of search when clicking on filter TV Shows button", () => {
    const setFilterFor = jest.fn();
    const wrapper = shallow(<SearchFilter setFilterFor={setFilterFor} />);

    const button = wrapper.find("#filterSelect");
    button.simulate("click");

    wrapper.find("#filterTv").simulate("click");

    expect(setFilterFor).toHaveBeenCalledWith("TV Shows");
  });
});
