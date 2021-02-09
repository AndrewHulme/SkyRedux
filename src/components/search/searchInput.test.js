import React from "react";
import { shallow, mount } from "enzyme";
import SearchInput from "./searchInput";

describe("SearchInput", () => {
  it("shows a search input field", () => {
    const wrapper = shallow(<SearchInput />);
    const input = wrapper.find("input");

    expect(input.exists()).toBeTruthy();
  });

  it("should immediately focus on input field", () => {
    document.body.innerHTML = "<div></div>";

    const wrapper = mount(<SearchInput />, {
      attachTo: document.getElementsByTagName("div")[0],
    });
    const input = wrapper.find("input");

    expect(input.props().id).toEqual(document.activeElement.id);
  });

  it("should update the search when typing", () => {
    const onSearch = jest.fn();
    const updateSearch = jest.fn();
    const initialProps = { updateSearch, onSearch };

    const wrapper = mount(<SearchInput {...initialProps} />);
    const input = wrapper.find("input");

    const event = { target: { value: "futurama" } };
    input.simulate("change", event);

    expect(updateSearch).toHaveBeenCalledWith("futurama");
  });

  it("should have the correct value for input form", () => {
    const wrapper = mount(<SearchInput search="futurama" />);
    const input = wrapper.find("input");

    expect(input.props().value).toEqual("futurama");
  });

  it("should initiate a search by pressing the 'Enter' key", () => {
    const onSearch = jest.fn();
    const initialProps = { onSearch };

    const wrapper = mount(<SearchInput {...initialProps} />);
    const input = wrapper.find("input");

    input.simulate("keypress", { key: "Enter" });

    expect(onSearch).toHaveBeenCalled();
  });
});
