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
  it("displays title and overview for a tv show", () => {
    const wrapper = shallow(
      <Details details={mockDetailsTv} mediaType={"tv"} />
    );

    const div = wrapper.find("#details");
    expect(div.text()).toContain(
      "The adventures of a late-20th-century New York City pizza delivery boy, Philip J. Fry,"
    );

    const title = wrapper.find("#detailsTitle");
    expect(title.text()).toContain("Futurama");
  });

  it("displays title and overview for a movie", () => {
    const wrapper = shallow(
      <Details details={mockDetailsMovie} mediaType={"movie"} />
    );

    const div = wrapper.find("#details");
    expect(div.text()).toContain(
      "Winter 1968 and showbiz legend Judy Garland arrives in Swinging London to perform"
    );

    const title = wrapper.find("#detailsTitle");
    expect(title.text()).toContain("Judy");
  });

  it("displays name and biography for a person", () => {
    const wrapper = shallow(
      <Details details={mockDetailsPerson} mediaType={"person"} />
    );

    const div = wrapper.find("#details");
    expect(div.text()).toContain(
      "Denzel Hayes Washington, Jr. (born December 28, 1954) is an American actor, screenwriter, director and film producer."
    );

    const title = wrapper.find("#detailsTitle");
    expect(title.text()).toContain("Denzel Washington");
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

    expect(div.text()).toContain("Real Name");
    expect(div.text()).toContain("Character Name");

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

    expect(div.text()).toContain("Real Name");
    expect(div.text()).toContain("Character Name");

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

    expect(div.text()).toContain("Media Type");
    expect(div.text()).toContain("Media Title");

    expect(div.text()).toContain("Inside Man");
    expect(div.text()).toContain("The Academy Awards");
  });

  it("calls onDetails when clicking the credits for tv show", () => {
    const onDetails = jest.fn();

    const wrapper = mount(
      <Details
        details={mockDetailsTv}
        mediaType={"tv"}
        id={456}
        onDetails={onDetails}
      />
    );

    const [mediaType, id, setCredits] = fetchCredits.mock.calls[0];

    act(() => setCredits(mockCreditsTv));

    wrapper.update();

    const detail = wrapper.find("#id198");
    detail.simulate("click");
    expect(onDetails).toHaveBeenCalled();
  });

  it("calls onDetails when clicking the credits for a movie", () => {
    const onDetails = jest.fn();

    const wrapper = mount(
      <Details
        details={mockDetailsMovie}
        mediaType={"movie"}
        id={49047}
        onDetails={onDetails}
      />
    );

    const [mediaType, id, setCredits] = fetchCredits.mock.calls[0];

    act(() => setCredits(mockCreditsMovie));

    wrapper.update();

    const detail = wrapper.find("#id18277");
    detail.simulate("click");
    expect(onDetails).toHaveBeenCalled();
  });

  it("calls onDetails when clicking the related movies for a person", () => {
    const onDetails = jest.fn();

    const wrapper = mount(
      <Details
        details={mockDetailsPerson}
        mediaType={"person"}
        id={5292}
        onDetails={onDetails}
      />
    );

    const [mediaType, id, setCredits] = fetchCredits.mock.calls[0];

    act(() => setCredits(mockCreditsPerson));

    wrapper.update();

    const detail = wrapper.find("#id388");
    detail.simulate("click");
    expect(onDetails).toHaveBeenCalled();
  });

  it("calls onDetails when clicking the related tv shows for a person", () => {
    const onDetails = jest.fn();

    const wrapper = mount(
      <Details
        details={mockDetailsPerson}
        mediaType={"person"}
        id={5292}
        onDetails={onDetails}
      />
    );

    const [mediaType, id, setCredits] = fetchCredits.mock.calls[0];

    act(() => setCredits(mockCreditsPerson));

    wrapper.update();

    const detail = wrapper.find("#id27023");
    detail.simulate("click");
    expect(onDetails).toHaveBeenCalled();
  });
});
