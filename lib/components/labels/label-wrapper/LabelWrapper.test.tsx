
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LabelWrapper, LabelWrapperProps } from "./LabelWrapper";

describe("LabelWrapper Component", () => {
  const renderLabelWrapper = (props: Partial<LabelWrapperProps> = {}) => {
    const defaultProps: LabelWrapperProps = {
      text: "Test LabelWrapper",
      ...props,
    };
    return render(<LabelWrapper {...defaultProps} />);
  };

  it("renders correctly with default props", () => {
    renderLabelWrapper();
    expect(screen.getByText("Test LabelWrapper")).toBeInTheDocument();
    expect(screen.getByText("Test LabelWrapper")).toHaveClass("inline-flex items-center rounded-md px-2 py-1 sm:text-2xs lg:text-xs font-medium ring-1 ring-inset");
  });

  it("applies custom className when provided", () => {
    renderLabelWrapper({ className: "custom-class" });
    expect(screen.getByText("Test LabelWrapper")).toHaveClass("custom-class");
  });

  it("applies color classes correctly", () => {
    const colors: LabelWrapperProps["color"][] = ["gray", "red", "yellow", "green", "blue", "purple", "pink"];
    colors.forEach(color => {
      renderLabelWrapper({ color });
      expect(screen.getByText("Test LabelWrapper")).toHaveClass(`bg-badge-${color} text-badge-${color}/10 ring-badge-${color}/80`);
    });
  });

  it("renders children when provided", () => {
    render(<LabelWrapper>Child Element</LabelWrapper>);
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});
