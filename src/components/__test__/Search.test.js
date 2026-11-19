import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../components/mocks/restaurantListMock.json";
import { BrowserRouter } from "react-router";
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(MOCK_DATA),
  }),
);

describe("Should render Search Component", () => {
  beforeAll(() => {
    // console.log("Before All");
  });

  beforeEach(() => {
    // console.log("beforeEach");
  });

  afterAll(() => {
    // console.log("afterAll");
  });

  afterEach(() => {
    // console.log("afterEach");
  });
  it("should search for text cake in the search input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>,
      ),
    );

    const cardsBeforeClick = screen.getAllByTestId("resCard");

    expect(cardsBeforeClick.length).toBe(4);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "Cake" } });
    fireEvent.click(searchBtn);

    // screen should load Coffee Card
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
  });

  it("should filter top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>,
      ),
    );
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(4);

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated" });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(1);
  });
});
