import { render, screen } from "@testing-library/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";

describe("Button", () => {
  test("test render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("with theme", () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });

  test("with className", () => {
    render(<Button className="test">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("test");
  });

  test("with square and size L", () => {
    render(
      <Button square size={ButtonSize.L}>
        TEST
      </Button>
    );
    expect(screen.getByText("TEST")).toHaveClass("square size_l");
  });

  test("with square and size M", () => {
    render(
      <Button square size={ButtonSize.M}>
        TEST
      </Button>
    );
    expect(screen.getByText("TEST")).toHaveClass("square size_m");
  });
});
