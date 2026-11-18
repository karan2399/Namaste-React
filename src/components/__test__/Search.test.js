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
});
