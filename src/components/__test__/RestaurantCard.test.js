import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOpenLabel } from "../RestaurantCard";
import MOCK_DATA from "../../components/mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

describe("RestaurantCard Testing Suite", () => {
  it("should render RestaurantCard Component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const zodiacText = screen.getByText("Zodiac by Fortune Landmark");
    expect(zodiacText).toBeInTheDocument();
  });

  it("should render RestaurantCard Component with open label", () => {
    const RestaurantCardWithOpenLabel = withOpenLabel(RestaurantCard);
    render(<RestaurantCardWithOpenLabel resData={MOCK_DATA} />);
    const openLabel = screen.getByText("Open");
    expect(openLabel).toBeInTheDocument();
  });
});
