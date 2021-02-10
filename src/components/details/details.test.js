import React from "react";
import { shallow } from "enzyme";
import Details from "./details";

import { mockDetailsTv } from "../../testHelper.js";
import { mockDetailsMovie } from "../../testHelper.js";
import { mockDetailsPerson } from "../../testHelper.js";

describe("Details", () => {
  it("displays overview for a tv show", () => {
    const wrapper = shallow(
      <Details details={mockDetailsTv} mediaType={"tv"} />
    );

    const div = wrapper.find("#details");

    expect(div.text()).toContain(
      "The adventures of a late-20th-century New York City pizza delivery boy, Philip J. Fry,"
    );
  });

  it("displays overview for a movie", () => {
    const wrapper = shallow(
      <Details details={mockDetailsMovie} mediaType={"movie"} />
    );

    const div = wrapper.find("#details");

    expect(div.text()).toContain(
      "Winter 1968 and showbiz legend Judy Garland arrives in Swinging London to perform"
    );
  });

  it("displays biography for a person", () => {
    const wrapper = shallow(
      <Details details={mockDetailsPerson} mediaType={"person"} />
    );

    const div = wrapper.find("#details");

    expect(div.text()).toContain(
      "Denzel Hayes Washington, Jr. (born December 28, 1954) is an American actor, screenwriter, director and film producer."
    );
  });
});
