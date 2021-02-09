import React from "react";
import { shallow } from "enzyme";
import Search from "./search";
import SearchInput from "./searchInput";
import SearchButton from "./searchButton";

describe("Search", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it("renders the SearchInput component", () => {
    const searchInput = wrapper.find(SearchInput);
    expect(searchInput.exists()).toBe(true);
  });

  it("renders the SearchButton component", () => {
    const searchButton = wrapper.find(SearchButton);
    expect(searchButton.exists()).toBe(true);
  });
});
