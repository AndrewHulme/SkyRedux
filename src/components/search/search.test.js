import React from "react";
import { shallow } from "enzyme";
import Search from "./search";

describe("Search", () => {
  it("shows a search input field", () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.find("input").exists()).toBeTruthy();
  });

  it("shows a search button", () => {
    const wrapper = shallow(<Search />);
    const button = wrapper.find("button");

    expect(button.exists()).toBeTruthy();
    expect(button.text()).toBe("Search");
  });
});
