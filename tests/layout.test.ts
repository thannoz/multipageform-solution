import { it, expect, describe } from "vitest";

describe("RootLayout", () => {
  it("should render correctly", () => {
    const htmlElement = document.querySelector("html");

    expect(htmlElement).toHaveProperty("lang");
  });
});
