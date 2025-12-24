import { fireEvent, render, screen } from "@testing-library/react";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  test("test render", () => {
    render(<Textarea />);
    expect(screen.getByTestId("textarea-wrapper")).toBeInTheDocument();
  });

  test("render with placeholder", () => {
    render(<Textarea placeholder="Some placeholder" />);
    const textarea = screen.getByText("Some placeholder");
    expect(textarea).toBeInTheDocument();
  });

  test("render with initial value", () => {
    render(<Textarea value="initial value" />);
    const textarea = screen.getByDisplayValue("initial value");
    expect(textarea).toHaveValue("initial value");
  });

  test("allows user to type", () => {
    render(<Textarea />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "typed text" } });
    expect(textarea).toHaveValue("typed text");
  });

  test("calls onChange when value changes", () => {
    const handleChange = jest.fn();
    render(<Textarea onChange={handleChange} />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledWith("new value");
  });
});
