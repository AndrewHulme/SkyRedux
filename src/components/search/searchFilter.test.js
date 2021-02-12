import React from "react";
import { shallow } from "enzyme";
import SearchFilter from "./searchFilter";

describe("SearchFilter", () => {
  it("shows a button initially called 'All'", () => {
    const wrapper = shallow(<SearchFilter filterFor="All" />);
    const button = wrapper.find(".dropbtn");

    expect(button.text()).toBe("All");
  });

  it("changes button text depending on props", () => {
    const wrapper = shallow(<SearchFilter filterFor="Actors" />);
    const button = wrapper.find(".dropbtn");

    expect(button.text()).toBe("Actors");
  });

  it("should have a drop down menu that is initially hidden", () => {
    const wrapper = shallow(<SearchFilter filterFor="All" />);

    const dropdown = wrapper.find("#myDropdown");
    expect(dropdown.exists()).toBeFalsy();
  });

  it("should show the drop down menu after clicking the main button", () => {
    const wrapper = shallow(<SearchFilter filterFor="All" />);

    const button = wrapper.find(".dropbtn");
    button.simulate("click");

    const dropdown2 = wrapper.find("#myDropdown");
    expect(dropdown2.exists()).toBeTruthy();
  });

  it("should have a button for each type of filter on dropdown", () => {
    const wrapper = shallow(<SearchFilter filterFor="All" />);

    const button = wrapper.find(".dropbtn");
    button.simulate("click");

    expect(wrapper.find("#filterAll").exists()).toBeTruthy();
    expect(wrapper.find("#filterActors").exists()).toBeTruthy();
    expect(wrapper.find("#filterMovies").exists()).toBeTruthy();
    expect(wrapper.find("#filterTv").exists()).toBeTruthy();
  });

  it("should have button text for each type of filter on dropdown", () => {
    const wrapper = shallow(<SearchFilter filterFor="All" />);

    const button = wrapper.find(".dropbtn");
    button.simulate("click");

    expect(wrapper.find("#filterAll").text()).toBe("All");
    expect(wrapper.find("#filterActors").text()).toBe("Actors");
    expect(wrapper.find("#filterMovies").text()).toBe("Movies");
    expect(wrapper.find("#filterTv").text()).toBe("TV Shows");
  });

  it("should change type of search when clicking on filter All button", () => {
    const setFilterFor = jest.fn();

    const wrapper = shallow(
      <SearchFilter filterFor="All" setFilterFor={setFilterFor} />
    );

    const button = wrapper.find(".dropbtn");
    button.simulate("click");

    wrapper.find("#filterAll").simulate("click");

    expect(setFilterFor).toHaveBeenCalledWith("All");
  });

  it("should change type of search when clicking on filter Actors button", () => {
    const setFilterFor = jest.fn();

    const wrapper = shallow(
      <SearchFilter filterFor="All" setFilterFor={setFilterFor} />
    );

    const button = wrapper.find(".dropbtn");
    button.simulate("click");

    wrapper.find("#filterActors").simulate("click");

    expect(setFilterFor).toHaveBeenCalledWith("Actors");
  });

  it("should change type of search when clicking on filter Movies button", () => {
    const setFilterFor = jest.fn();

    const wrapper = shallow(
      <SearchFilter filterFor="All" setFilterFor={setFilterFor} />
    );

    const button = wrapper.find(".dropbtn");
    button.simulate("click");

    wrapper.find("#filterMovies").simulate("click");

    expect(setFilterFor).toHaveBeenCalledWith("Movies");
  });

  it("should change type of search when clicking on filter TV Shows button", () => {
    const setFilterFor = jest.fn();

    const wrapper = shallow(
      <SearchFilter filterFor="All" setFilterFor={setFilterFor} />
    );

    const button = wrapper.find(".dropbtn");
    button.simulate("click");

    wrapper.find("#filterTv").simulate("click");

    expect(setFilterFor).toHaveBeenCalledWith("TV Shows");
  });
});
