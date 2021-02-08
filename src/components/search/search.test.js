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

  it("should initiate a search by clicking the 'Search' button", () => {
    const onSearch = jest.fn();
    const updateSearch = jest.fn();
    const initialProps = { updateSearch, onSearch };

    const wrapper = shallow(<Search {...initialProps} />);
    const input = wrapper.find("input");
    const button = wrapper.find("button");

    const event = { target: { value: "futurama" } };
    input.simulate("change", event);

    expect(updateSearch).toHaveBeenCalledWith("futurama");

    button.simulate("click");
    expect(onSearch).toHaveBeenCalled();
  });
});
