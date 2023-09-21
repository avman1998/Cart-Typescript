import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header2 from "../Header";
import CartContextProvider from "../Context/Context";
import { BrowserRouter } from "react-router-dom";

//- Need to provide CartContextProvider Component, bcz it is being used in header component
//- BrowserRouter need to be there to avoid Link Component error.
describe("Header Test Cases", () => {
  test("Should show up header component", () => {
    //   Rendering
    render(
      <BrowserRouter>
        <CartContextProvider>
          <Header2 />
        </CartContextProvider>
      </BrowserRouter>
    );

    //   Querying
    const headers = screen.getAllByRole("heading");
    //Assertion
    expect(headers.length).toBeTruthy();
  });

  test("should render header compent with Login Button", () => {
    render(
      <BrowserRouter>
        <CartContextProvider>
          <Header2 />
        </CartContextProvider>
      </BrowserRouter>
    );

    //   for specific element with specific text
    const button = screen.getByRole("button", { name: "Log In" });

    console.log(button);
    expect(button).toBeInTheDocument();
  });

  test("should render cart button with 0 items", () => {
    render(
      <BrowserRouter>
        <CartContextProvider>
          <Header2 />
        </CartContextProvider>
      </BrowserRouter>
    );
    //Used Regex
    const cartBtn = screen.getByText(/Cart/);
    expect(cartBtn).toBeInTheDocument();
  });
});
