
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label, LabelProps } from "./Label";

describe("Label Component", () => {
  const renderLabel = (props: Partial<LabelProps> = {}) => {
    const defaultProps: LabelProps = {
      text: "Test Label",
      ...props,
    };
    return render(<Label {...defaultProps} />);
  };

  it("renders correctly with default props", () => {
    renderLabel();
    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByText("Test Label")).toHaveClass("inline-flex items-center rounded-md px-2 py-1 sm:text-2xs lg:text-xs font-medium ring-1 ring-inset");
  });

  it("applies custom className when provided", () => {
    renderLabel({ className: "custom-class" });
    expect(screen.getByText("Test Label")).toHaveClass("custom-class");
  });

  it("renders children when provided", () => {
    render(<Label>Child Element</Label>);
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});
