import React from "react";
import { shallow, mount } from "enzyme";
import Search from "./search";

describe("Search", () => {
  it("shows a search input field", () => {
    const wrapper = shallow(<Search />);
    const input = wrapper.find("input");

    expect(input.exists()).toBeTruthy();
  });

  it("shows a search button", () => {
    const wrapper = shallow(<Search />);
    const button = wrapper.find("button");

    expect(button.exists()).toBeTruthy();
    expect(button.text()).toBe("Search");
  });

  it("should immediately focus on input field", () => {
    document.body.innerHTML = "<div></div>";

    const wrapper = mount(<Search />, {
      attachTo: document.getElementsByTagName("div")[0],
    });
    const input = wrapper.find("input");

    expect(input.props().id).toEqual(document.activeElement.id);
  });
});
