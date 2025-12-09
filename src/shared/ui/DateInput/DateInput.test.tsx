import { fireEvent, render, screen } from "@testing-library/react";
import { DateInput } from "./DateInput";

describe("DateInput", () => {
  test("test render", () => {
    render(<DateInput />);
    expect(screen.getByTestId("input-wrapper")).toBeInTheDocument();
  });

  test("render with placeholder", () => {
    render(<DateInput placeholder="Some placeholder" />);
    const input = screen.getByText("Some placeholder");
    expect(input).toBeInTheDocument();
  });

  test("should display formatted date from provided timestamp value", () => {
    const testDate = new Date("1990-05-15T00:00:00Z");
    const testTimestamp = testDate.getTime();
    render(<DateInput value={testTimestamp} />);
    const inputElement = screen.getByTestId("date-input") as HTMLInputElement;
    expect(inputElement.value).toBe("1990-05-15");
  });

  test("should call onChange with correct timestamp when date is selected", async () => {
    const handleChange = jest.fn();
    render(<DateInput onChange={handleChange} />);
    const inputElement = screen.getByTestId("date-input");
    const selectedDateString = "2000-01-01";
    const expectedTimestamp = new Date(selectedDateString).getTime();
    fireEvent.change(inputElement, { target: { value: selectedDateString } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expectedTimestamp);
  });
});
