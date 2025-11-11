import "@testing-library/jest-dom/vitest";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { configureAxe } from "jest-axe";

// Configure axe for Vitest
const axe = configureAxe({
  rules: {
    // Add any custom rules here if needed
  },
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});
