import React from "react";
import ReactDOM from "react-dom";
import {act, Simulate} from "react-dom/test-utils";
import App from "./App";
import {bigProjects, contactInfo, greeting} from "./portfolio";

let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<App />, container);
  });
});
afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
});

it("preserves every published project and the resume and contact links", () => {
  expect(container.querySelectorAll(".project-card")).toHaveLength(
    bigProjects.projects.length
  );
  bigProjects.projects.forEach(project => {
    expect(
      container.querySelector(`a[href="${project.footerLink[0].url}"]`)
    ).not.toBeNull();
  });
  expect(
    container.querySelector(`a[href="${greeting.resumeLink}"]`)
  ).not.toBeNull();
  expect(
    container.querySelector(`a[href="mailto:${contactInfo.email_address}"]`)
  ).not.toBeNull();
  expect(container.querySelectorAll(".experience-row")).toHaveLength(4);
});

it("filters projects and restores all projects with accessible selected states", () => {
  const buttons = Array.from(
    container.querySelectorAll(".project-filters button")
  );
  act(() =>
    Simulate.click(buttons.find(button => button.textContent === "Education"))
  );
  expect(container.querySelectorAll(".project-card")).toHaveLength(2);
  expect(
    container.querySelector(".project-filters [aria-pressed=true]").textContent
  ).toBe("Education");
  expect(container.querySelector(".project-grid").textContent).toContain(
    "Afak Elibdae"
  );
  expect(container.querySelector(".project-grid").textContent).not.toContain(
    "SW Games"
  );
  act(() => Simulate.click(buttons[0]));
  expect(container.querySelectorAll(".project-card")).toHaveLength(
    bigProjects.projects.length
  );
});

it("has valid section navigation targets and safe external links", () => {
  container.querySelectorAll('a[href^="#"]').forEach(link => {
    expect(container.querySelector(link.getAttribute("href"))).not.toBeNull();
  });
  container.querySelectorAll('a[target="_blank"]').forEach(link => {
    expect(link.rel).toContain("noopener");
  });
});
