import { screen, fireEvent } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar", () => {
  test("test render", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    screen.debug();
  });

  test("with className", () => {
    renderWithTranslation(<Sidebar className="test" />);
    expect(screen.getByTestId("sidebar")).toHaveClass("test");
    screen.debug();
  });

  test("test toggle", () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    screen.debug();
  });
});
