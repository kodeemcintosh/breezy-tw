
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LinkMenu, LinkMenuProps } from "./LinkMenu";

describe("LinkMenu Component", () => {
  const renderLinkMenu = (props: Partial<LinkMenuProps> = {}) => {
    const defaultProps: LinkMenuProps = {
      ...props,
    };
    return render(<LinkMenu {...defaultProps} />);
  };

  it("renders correctly with default props", () => {
    renderLinkMenu();
    expect(screen.getByText("Test LinkMenu")).toBeInTheDocument();
    expect(screen.getByText("Test LinkMenu")).toHaveClass("inline-flex items-center rounded-md px-2 py-1 sm:text-2xs lg:text-xs font-medium ring-1 ring-inset");
  });

  it("applies custom className when provided", () => {
    renderLinkMenu({ className: "custom-class" });
    expect(screen.getByText("Test LinkMenu")).toHaveClass("custom-class");
  });

  it("renders children when provided", () => {
    render(<LinkMenu>Child Element</LinkMenu>);
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });
});
