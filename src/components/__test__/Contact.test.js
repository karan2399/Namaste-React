import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// Describe is used to combine test cases into a single block
describe("Contact Us Page Test Cases", () => {
  // test can be written as it also
  it("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should have text qestions", () => {
    render(<Contact />);

    const text = screen.getByText(/questions/i);

    expect(text).toBeInTheDocument();
  });
});
