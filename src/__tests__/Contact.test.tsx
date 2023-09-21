import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact us test cases", () => {
  it("contact page should show up", () => {
    // Rendering
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("button should show up", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("text should show up", () => {
    render(<Contact />);
    const text = screen.getByText("Submit");
    expect(text).toBeInTheDocument();
  });
});
