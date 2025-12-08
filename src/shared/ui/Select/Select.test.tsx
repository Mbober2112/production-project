import { userEvent } from "@storybook/testing-library";
import { fireEvent, render, screen } from "@testing-library/react";
import { Select } from "./Select";

describe("Select", () => {
  test("test render", () => {
    render(
      <Select
        options={[
          { value: "First value", content: "First content" },
          { value: "Second value", content: "Second content" },
          { value: "Third value", content: "Third content" },
        ]}
      />
    );
    expect(screen.getByTestId("select-wrapper")).toBeInTheDocument();
  });

  test("render with placeholder", () => {
    render(
      <Select
        options={[
          { value: "First value", content: "First content" },
          { value: "Second value", content: "Second content" },
          { value: "Third value", content: "Third content" },
        ]}
        placeholder="Some placeholder"
      />
    );
    const select = screen.getByText("Some placeholder");
    expect(select).toBeInTheDocument();
  });

  test("should have the correct initial value", () => {
    render(
      <Select
        options={[
          { value: "First value", content: "First content" },
          { value: "Second value", content: "Second content" },
          { value: "Third value", content: "Third content" },
        ]}
        value="First value"
      />
    );
    const selectElement = screen.getByRole("combobox") as HTMLSelectElement;
    expect(selectElement.value).toBe("First value");
  });

  test("should call onChange with the new value when an option is selected", async () => {
    const handleChange = jest.fn();
    render(
      <Select
        options={[
          { value: "First value", content: "First content" },
          { value: "Second value", content: "Second content" },
          { value: "Third value", content: "Third content" },
        ]}
        onChange={handleChange}
        value="First value"
      />
    );

    const select = screen.getByRole("combobox");

    userEvent.selectOptions(select, "Third value");

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("Third value");
  });
});
