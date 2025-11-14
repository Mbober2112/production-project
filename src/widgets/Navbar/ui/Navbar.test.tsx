import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  test("test render", () => {
    render(<Navbar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    screen.debug();
  });
  test("open auth modal", () => {
    render(<Navbar />);
    const enterButton = screen.getByTestId("navbar-enter-button");
    fireEvent.click(enterButton);
    expect(screen.getByTestId("modal")).toHaveClass("opened");
    screen.debug();
  });
});
