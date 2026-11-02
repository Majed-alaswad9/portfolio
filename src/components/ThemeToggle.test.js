import React from "react";
import ReactDOM from "react-dom";
import {act, Simulate} from "react-dom/test-utils";
import ThemeToggle from "./ThemeToggle";

let container;
const originalMatchMedia = window.matchMedia;
beforeEach(() => {
  localStorage.removeItem("isDark");
  window.matchMedia = jest.fn(() => ({matches: false}));
  container = document.createElement("div");
});
afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  localStorage.removeItem("isDark");
  delete document.documentElement.dataset.theme;
  window.matchMedia = originalMatchMedia;
  jest.restoreAllMocks();
});
function renderToggle() {
  act(() => {
    ReactDOM.render(<ThemeToggle />, container);
  });
  return container.querySelector("button");
}

it("uses the system preference when no theme is saved", () => {
  window.matchMedia = jest.fn(() => ({matches: true}));
  expect(renderToggle().getAttribute("aria-pressed")).toBe("true");
  expect(document.documentElement.dataset.theme).toBe("dark");
});

it("persists a toggle and restores it ahead of the system preference", () => {
  let button = renderToggle();
  act(() => Simulate.click(button));
  expect(document.documentElement.dataset.theme).toBe("dark");
  expect(localStorage.getItem("isDark")).toBe("true");
  ReactDOM.unmountComponentAtNode(container);
  button = renderToggle();
  expect(button.getAttribute("aria-pressed")).toBe("true");
  act(() => Simulate.click(button));
  expect(document.documentElement.dataset.theme).toBe("light");
  expect(localStorage.getItem("isDark")).toBe("false");
});

it("keeps switching themes when storage cannot be written", () => {
  jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw new Error("Storage unavailable");
  });
  jest.spyOn(console, "log").mockImplementation(() => {});
  const button = renderToggle();
  act(() => Simulate.click(button));
  expect(button.getAttribute("aria-pressed")).toBe("true");
  expect(document.documentElement.dataset.theme).toBe("dark");
});
