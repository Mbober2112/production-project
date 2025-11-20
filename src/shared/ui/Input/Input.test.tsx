import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  test("test render", () => {
    render(<Input />);
    expect(screen.getByTestId("input-wrapper")).toBeInTheDocument();
  });

  test("render with placeholder", () => {
    render(<Input placeholder="Some placeholder" />);
    const input = screen.getByText("Some placeholder");
    expect(input).toBeInTheDocument();
  });

  test("render with initial value", () => {
    render(<Input value="initial value" />);
    const input = screen.getByDisplayValue("initial value");
    expect(input).toHaveValue("initial value");
  });

  test("allows user to type", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "typed text" } });
    expect(input).toHaveValue("typed text");
  });

  test("calls onChange when value changes", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledWith("new value");
  });
});
