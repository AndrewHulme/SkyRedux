import React from "react";
import { shallow } from "enzyme";
import App from "./app";
import Search from "./components/search/search";

describe("App", () => {
  it("search input and button are always displayed", () => {
    const wrapper = shallow(<App />);
    const search = wrapper.find(Search);
    expect(search.exists()).toBe(true);
  });
});
