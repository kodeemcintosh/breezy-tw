
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal, ModalProps } from "./Modal";

describe("Modal Component", () => {
  const renderModal = (props: Partial<ModalProps> = {}) => {
    const defaultProps: ModalProps = {
      title: "Test Modal",
      ...props,
    };
    return render(<Modal {...defaultProps} />);
  };

  it("renders correctly with default props", () => {
    renderModal();
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Test Modal")).toHaveClass("inline-flex items-center rounded-md px-2 py-1 sm:text-2xs lg:text-xs font-medium ring-1 ring-inset");
  });

  it("applies custom className when provided", () => {
    renderModal({ className: "custom-class" });
    expect(screen.getByText("Test Modal")).toHaveClass("custom-class");
  });

  it("renders children when provided", () => {
    render(<Modal>Child Element</Modal>);
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});
