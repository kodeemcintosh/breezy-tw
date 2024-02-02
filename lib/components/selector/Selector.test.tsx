
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Selector, SelectorProps } from "./Selector";

describe("Selector Component", () => {
  const renderSelector = (props: Partial<SelectorProps> = {}) => {
    const defaultProps: SelectorProps = {
      ...props,
    };
    return render(<Selector {...defaultProps} />);
  };

  it("renders correctly with default props", () => {
    renderSelector();
    expect(screen.getByText("Test Selector")).toBeInTheDocument();
    expect(screen.getByText("Test Selector")).toHaveClass("inline-flex items-center rounded-md px-2 py-1 sm:text-2xs lg:text-xs font-medium ring-1 ring-inset");
  });

  it("applies custom className when provided", () => {
    renderSelector({ className: "custom-class" });
    expect(screen.getByText("Test Selector")).toHaveClass("custom-class");
  });

  it("renders children when provided", () => {
    render(<Selector>Child Element</Selector>);
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});
