import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Button } from "./Button";

describe("Button", () => {
  it("should render with children", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeDefined();
  });

  it("should apply primary variant styles by default", () => {
    const { getByText } = render(<Button>Primary</Button>);
    const button = getByText("Primary");
    expect(button.className).toContain("bg-teal");
  });

  it("should apply secondary variant styles when specified", () => {
    const { getByText } = render(
      <Button variant="secondary">Secondary</Button>
    );
    const button = getByText("Secondary");
    expect(button.className).toContain("bg-white");
  });

  it("should be disabled when disabled prop is true", () => {
    const { getByText } = render(<Button disabled>Disabled</Button>);
    const button = getByText("Disabled") as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Button>Accessible Button</Button>);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
