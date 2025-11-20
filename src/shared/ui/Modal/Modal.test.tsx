import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
  test("test render", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        TEST
      </Modal>
    );
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  test("test modal is opened", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        TEST
      </Modal>
    );
    expect(screen.getByTestId("modal")).toHaveClass("opened");
  });

  test("test modal is closed", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        TEST
      </Modal>
    );
    expect(screen.getByTestId("modal")).not.toHaveClass("opened");
  });

  test("test lazy modal", () => {
    render(
      <Modal isOpen={false} lazy onClose={() => {}}>
        TEST
      </Modal>
    );
    const modal = screen.queryByTestId("modal");
    expect(modal).toBeNull();
  });
});
