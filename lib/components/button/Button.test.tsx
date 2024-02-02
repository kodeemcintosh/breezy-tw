
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button, ButtonProps } from "./Button";

describe("Button Component", () => {
  const renderButton = (props: Partial<ButtonProps> = {}) => {
    const defaultProps: ButtonProps = {
      onClick: jest.fn(),
      text: "Test Button",
      ...props,
    };
    return render(<Button {...defaultProps} />);
  };

  it("renders correctly with default props", () => {
    renderButton();
    expect(screen.getByText("Test Button")).toBeInTheDocument();
    expect(screen.getByText("Test Button")).toHaveClass("inline-flex items-center rounded-md px-2 py-1 sm:text-2xs lg:text-xs font-medium ring-1 ring-inset");
  });

  it("applies custom className when provided", () => {
    renderButton({ className: "custom-class" });
    expect(screen.getByText("Test Button")).toHaveClass("custom-class");
  });


  it("renders children when provided", () => {
    render(<Button onClick={() => jest.fn()}>Child Element</Button>);
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});
