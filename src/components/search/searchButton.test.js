import React from "react";
import { shallow, mount } from "enzyme";
import SearchButton from "./searchButton";

describe("SearchButton", () => {
  it("shows a search button", () => {
    const wrapper = shallow(<SearchButton />);
    const button = wrapper.find("button");

    expect(button.exists()).toBeTruthy();
    expect(button.text()).toBe("Search");
  });

  it("should initiate a search by clicking the 'Search' button", () => {
    const onSearch = jest.fn();
    const updateSearch = jest.fn();
    const initialProps = { updateSearch, onSearch };

    const wrapper = mount(<SearchButton {...initialProps} />);
    const button = wrapper.find("button");

    button.simulate("click");
    expect(onSearch).toHaveBeenCalled();
  });
});
