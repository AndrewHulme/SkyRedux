import React from "react";
import { shallow } from "enzyme";
import Results from "./results";
import { mockResults } from "../../testHelper.js";

describe("Results", () => {
  let wrapper;
  let onDetails;

  beforeEach(() => {
    onDetails = jest.fn();

    wrapper = shallow(<Results results={mockResults} onDetails={onDetails} />);
  });

  it("Displays all three results", () => {
    const tableRow = wrapper.find(".tableRow");
    expect(tableRow.length).toEqual(3);
  });

  it("Displays the title of the results", () => {
    const result1 = wrapper.find("#id491283");
    expect(result1.text()).toContain("Judy");

    const result2 = wrapper.find("#id615");
    expect(result2.text()).toContain("Futurama");

    const result3 = wrapper.find("#id5292");
    expect(result3.text()).toContain("Denzel Washington");
  });

  it("Displays the media_type of the results", () => {
    const result1 = wrapper.find("#id491283");
    expect(result1.text()).toContain("movie");

    const result2 = wrapper.find("#id615");
    expect(result2.text()).toContain("tv");

    const result3 = wrapper.find("#id5292");
    expect(result3.text()).toContain("person");
  });

  it("Calls onDetails when clicking the result", () => {
    const result = wrapper.find("#id491283");
    result.simulate("click");
    expect(onDetails).toHaveBeenCalled();
  });
});
