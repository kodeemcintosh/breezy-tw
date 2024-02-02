
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SelectorWrapper, SelectorWrapperProps } from "./Selector";

describe("SelectorWrapper Component", () => {
  const renderSelectorWrapper = (props: Partial<SelectorWrapperProps> = {}) => {
    const defaultProps: SelectorWrapperProps = {
      text: "Test SelectorWrapper",
      ...props,
    };
    return render(<SelectorWrapper {...defaultProps} />);
  };

  it("renders correctly with default props", () => {
    renderSelectorWrapper();
    expect(screen.getByText("Test SelectorWrapper")).toBeInTheDocument();
    expect(screen.getByText("Test SelectorWrapper")).toHaveClass("inline-flex items-center rounded-md px-2 py-1 sm:text-2xs lg:text-xs font-medium ring-1 ring-inset");
  });

  it("applies custom className when provided", () => {
    renderSelectorWrapper({ className: "custom-class" });
    expect(screen.getByText("Test SelectorWrapper")).toHaveClass("custom-class");
  });

  it("renders children when provided", () => {
    render(<SelectorWrapper>Child Element</SelectorWrapper>);
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});
