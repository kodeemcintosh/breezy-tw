import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Badge, BadgeProps } from "./Badge";

describe("Badge Component", () => {
  const renderBadge = (props: Partial<BadgeProps> = {}) => {
    const defaultProps: BadgeProps = {
      text: "Test Badge",
      ...props,
    };
    return render(<Badge {...defaultProps} />);
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

  it("applies color classes correctly", () => {
    const colors: BadgeProps["color"][] = ["gray", "red", "yellow", "green", "blue", "purple", "pink"];
    colors.forEach(color => {
      renderBadge({ color });
      expect(screen.getByText("Test Badge")).toHaveClass(`bg-badge-${color} text-badge-${color}/10 ring-badge-${color}/80`);
    });
  });

  it("renders children when provided", () => {
    render(<Badge>Child Element</Badge>);
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});
