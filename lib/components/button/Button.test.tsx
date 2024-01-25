
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button, ButtonProps } from "./Button";

describe("Button Component", () => {
  const renderButton = (props: Partial<ButtonProps> = {}) => {
    const defaultProps: ButtonProps = {
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

  it("applies color classes correctly", () => {
    const colors: ButtonProps["color"][] = ["gray", "red", "yellow", "green", "blue", "purple", "pink"];
    colors.forEach(color => {
      renderButton({ color });
      expect(screen.getByText("Test Button")).toHaveClass(`bg-badge-${color} text-badge-${color}/10 ring-badge-${color}/80`);
    });
  });

  it("renders children when provided", () => {
    render(<Button>Child Element</Button>);
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});
