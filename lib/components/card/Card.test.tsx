
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card, CardProps } from "./Card";

describe("Card Component", () => {
  const renderCard = (props: Partial<CardProps> = {}) => {
    const defaultProps: CardProps = {
      title: "Test Card",
      ...props,
    };
    return render(<Card {...defaultProps} />);
  };

  it("renders correctly with default props", () => {
    renderCard();
    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByText("Test Card")).toHaveClass("inline-flex items-center rounded-md px-2 py-1 sm:text-2xs lg:text-xs font-medium ring-1 ring-inset");
  });

  it("applies custom className when provided", () => {
    renderCard({ className: "custom-class" });
    expect(screen.getByText("Test Card")).toHaveClass("custom-class");
  });

  it("renders children when provided", () => {
    render(<Card>Child Element</Card>);
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});
