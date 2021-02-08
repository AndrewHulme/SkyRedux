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

  it("should update the search when typing", () => {
    const onSearch = jest.fn();
    const updateSearch = jest.fn();
    const initialProps = { updateSearch, onSearch };

    const wrapper = mount(<Search {...initialProps} />);
    const input = wrapper.find("input");

    const event = { target: { value: "futurama" } };
    input.simulate("change", event);

    expect(updateSearch).toHaveBeenCalledWith("futurama");
  });

  it("should have the correct value for input form", () => {
    const wrapper = mount(<Search search="futurama" />);
    const input = wrapper.find("input");

    expect(input.props().value).toEqual("futurama");
  });

  it("should initiate a search by clicking the 'Search' button", () => {
    const onSearch = jest.fn();
    const updateSearch = jest.fn();
    const initialProps = { updateSearch, onSearch };

    const wrapper = mount(<Search {...initialProps} />);
    const button = wrapper.find("button");

    button.simulate("click");
    expect(onSearch).toHaveBeenCalled();
  });

  it("should initiate a search by pressing the 'Enter' key", () => {
    const onSearch = jest.fn();
    const initialProps = { onSearch };

    const wrapper = mount(<Search {...initialProps} />);
    const input = wrapper.find("input");

    input.simulate("keypress", { key: "Enter" });

    expect(onSearch).toHaveBeenCalled();
  });
});
