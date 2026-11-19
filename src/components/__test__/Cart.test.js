import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../components/mocks/restaurantMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { MemoryRouter, Route, Routes } from "react-router";
import { clearCart } from "../../utils/slices/cartSlice";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  }),
);

describe("Cart", () => {
  beforeEach(() => {
    appStore.dispatch(clearCart());
  });

  it("should load RestaurantMenu Component", async () => {
    await act(async () =>
      render(
        <MemoryRouter initialEntries={["/restaurant/123"]}>
          <Provider store={appStore}>
            <Routes>
              <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
            </Routes>
          </Provider>
        </MemoryRouter>,
      ),
    );

    const accordionHeader = screen.getByRole("button", {
      name: /^Sandwiches\s+16\s+items$/,
    });
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("food-item")).toHaveLength(16);

    const addBtns = screen.getAllByRole("button", { name: "Add" });

    fireEvent.click(addBtns[0]);

    expect(appStore.getState().cart.items).toHaveLength(1);
    expect(screen.getByRole("button", { name: "Remove" })).toBeInTheDocument();
  });
});
