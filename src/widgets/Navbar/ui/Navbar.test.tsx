import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  test("test render", () => {
    componentRender(<Navbar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
  test("open auth modal", () => {
    componentRender(<Navbar />);
    const enterButton = screen.getByTestId("navbar-enter-button");
    fireEvent.click(enterButton);
    expect(screen.getByTestId("modal")).toHaveClass("opened");
  });
});
