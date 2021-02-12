import React from "react";
import { shallow, mount } from "enzyme";
import SearchInput from "./searchInput";

import { mockResults } from "../../testHelper.js";

import { fetchResults } from "../../fetchRequests/fetchResults.js";
jest.mock("../../fetchRequests/fetchResults.js");

import { act } from "react-dom/test-utils";

describe("SearchInput", () => {
  it("shows a search input field", () => {
    const wrapper = shallow(<SearchInput search="" />);
    const input = wrapper.find("input");

    expect(input.exists()).toBeTruthy();
  });

  it("should immediately focus on input field", () => {
    document.body.innerHTML = "<div></div>";

    const wrapper = mount(<SearchInput search="" />, {
      attachTo: document.getElementsByTagName("div")[0],
    });
    const input = wrapper.find("input");

    expect(input.props().id).toEqual(document.activeElement.id);
  });

  it("should update the search when typing", () => {
    const onSearch = jest.fn();
    const updateSearch = jest.fn();
    const search = "";
    const initialProps = { updateSearch, onSearch, search };

    const wrapper = mount(<SearchInput {...initialProps} />);
    const input = wrapper.find("input");

    const event = { target: { value: "futu" } };
    input.simulate("change", event);

    expect(updateSearch).toHaveBeenCalledWith("futu");
  });

  it("should have the correct value for input form", () => {
    const wrapper = mount(<SearchInput search="futu" />);
    const input = wrapper.find("input");

    expect(input.props().value).toEqual("futu");
  });

  it("should initiate a search by pressing the 'Enter' key", () => {
    const onSearch = jest.fn();
    const search = "";
    const initialProps = { onSearch, search };

    const wrapper = mount(<SearchInput {...initialProps} />);
    const input = wrapper.find("input");

    input.simulate("keypress", { key: "p" });
    expect(onSearch).not.toHaveBeenCalled();

    input.simulate("keypress", { key: "Enter" });
    expect(onSearch).toHaveBeenCalled();
  });

  it("initially does not show search suggestions for search under 4 characters", () => {
    const updateSearch = jest.fn();
    const search = "judy";
    const initialProps = { updateSearch, search };
    const wrapper = mount(<SearchInput {...initialProps} />);

    const searchSuggestions = wrapper.find("#searchSuggestions");
    expect(searchSuggestions.exists()).toBeFalsy();
  });

  describe("having entered 5 or more characters", () => {
    it("should show search suggestions to user after 5 characters have been entered", async () => {
      const updateSearch = jest.fn();
      const search = "testing";

      const initialProps = { updateSearch, search };

      fetchResults.mockResolvedValue(mockResults);

      let wrapper;
      await act(() => {
        wrapper = mount(<SearchInput {...initialProps} />);
        return Promise.resolve();
      });

      wrapper.update();

      const searchSuggestions = wrapper.find("#searchSuggestions");
      expect(searchSuggestions.exists()).toBeTruthy();

      const entries = searchSuggestions.find(".suggestionsEntry");
      expect(entries.length).toEqual(3);
    });

    it("should show search suggestion names to user", async () => {
      const updateSearch = jest.fn();
      const search = "testing";

      const initialProps = { updateSearch, search };

      fetchResults.mockResolvedValue(mockResults);

      let wrapper;
      await act(() => {
        wrapper = mount(<SearchInput {...initialProps} />);
        return Promise.resolve();
      });

      wrapper.update();

      const suggestion = wrapper.find("#suggestionid491283");
      expect(suggestion.text()).toContain("Judy");
    });

    it("should call onDetails when clicking on a suggestion", async () => {
      const updateSearch = jest.fn();
      const onDetails = jest.fn();
      const search = "testing";

      const initialProps = { updateSearch, search, onDetails };

      fetchResults.mockResolvedValue(mockResults);

      let wrapper;
      await act(() => {
        wrapper = mount(<SearchInput {...initialProps} />);
        return Promise.resolve();
      });

      wrapper.update();

      const suggestion = wrapper.find("#suggestionid491283");

      suggestion.simulate("click");
      expect(onDetails).toHaveBeenCalledWith({
        media_type: "movie",
        id: 491283,
      });
    });
  });
});
