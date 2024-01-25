
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input, InputProps } from "./Input";

describe("Input Component", () => {
  const renderBadge = (props: Partial<InputProps> = {}) => {
    const defaultProps: InputProps = {
      placeholder: "Placeholder",
      ...props,
    };
    return render(<Input {...defaultProps} />);
  };

  it("renders correctly with default props", () => {
    renderBadge();
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
    expect(screen.getByText("Test Badge")).toHaveClass("inline-flex items-center rounded-md px-2 py-1 sm:text-2xs lg:text-xs font-medium ring-1 ring-inset");
  });

  it("applies custom className when provided", () => {
    renderBadge({ className: "custom-class" });
    expect(screen.getByText("Test Badge")).toHaveClass("custom-class");
  });

  it("renders children when provided", () => {
    render(<Input>Child Element</Input>);
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});
