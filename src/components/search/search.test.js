import React from "react";
import { shallow, mount } from "enzyme";
import Search from "./search";
import SearchInput from "./searchInput";
import SearchButton from "./searchButton";

describe("Search", () => {
  it("renders the SearchInput component", () => {
    const wrapper = shallow(<Search />);
    const searchInput = wrapper.find(SearchInput);
    expect(searchInput.exists()).toBe(true);
  });

  it("renders the SearchButton component", () => {
    const wrapper = shallow(<Search />);
    const searchButton = wrapper.find(SearchButton);
    expect(searchButton.exists()).toBe(true);
  });
});
