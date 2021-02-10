import React from "react";
import { shallow, mount } from "enzyme";
import Details from "./details";

import {
  mockDetailsTv,
  mockDetailsMovie,
  mockDetailsPerson,
  mockCreditsTv,
  mockCreditsMovie,
  mockCreditsPerson,
} from "../../testHelper.js";

import { fetchCredits } from "../../fetchRequests/fetchCredits.js";
jest.mock("../../fetchRequests/fetchCredits.js");

import { act } from "react-dom/test-utils";

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

  it("calls fetchCredits with correct parameters", () => {
    const wrapper = mount(
      <Details details={mockDetailsTv} mediaType={"tv"} id={456} />
    );

    expect(fetchCredits).toBeCalledTimes(1);
    expect(fetchCredits).toBeCalledWith("tv", 456, expect.anything());
  });

  it("displays credits for a tv show", () => {
    const wrapper = mount(
      <Details details={mockDetailsTv} mediaType={"tv"} id={456} />
    );

    const [mediaType, id, setCredits] = fetchCredits.mock.calls[0];

    act(() => setCredits(mockCreditsTv));

    const div = wrapper.find("#credits");
    expect(div.text()).toContain("Dan Castellaneta");
    expect(div.text()).toContain("Homer Simpson");
    expect(div.text()).toContain("Julie Kavner");
    expect(div.text()).toContain("Marge Simpson");
  });

  it("displays credits for a movie", () => {
    const wrapper = mount(
      <Details details={mockDetailsMovie} mediaType={"movie"} id={49047} />
    );

    const [mediaType, id, setCredits] = fetchCredits.mock.calls[0];

    act(() => setCredits(mockCreditsMovie));

    const div = wrapper.find("#credits");
    expect(div.text()).toContain("Sandra Bullock");
    expect(div.text()).toContain("George Clooney");
    expect(div.text()).toContain("Dr. Ryan Stone");
    expect(div.text()).toContain("Lt. Matt Kowalski");
  });

  it("displays list of shows for each person", () => {
    const wrapper = mount(
      <Details details={mockDetailsPerson} mediaType={"person"} id={5292} />
    );

    const [mediaType, id, setCredits] = fetchCredits.mock.calls[0];

    act(() => setCredits(mockCreditsPerson));

    const div = wrapper.find("#credits");
    expect(div.text()).toContain("Inside Man");
    expect(div.text()).toContain("The Academy Awards");
  });
});
