import React from "react";
import ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";
import axios from "axios";
import Projects from "./Projects";
import {StyleProvider} from "../../contexts/StyleContext";

jest.mock("axios", () => ({get: jest.fn()}));
jest.mock("../../components/githubRepoCard/GithubRepoCard", () => () => (
  <div className="repo-card" />
));

it("ignores GitHub pinned-item edges whose node is null", async () => {
  axios.get.mockResolvedValue({
    data: {
      data: {
        user: {
          pinnedItems: {edges: [{node: null}, {node: {id: "repo-1"}}]}
        }
      }
    }
  });
  const container = document.createElement("div");
  const consoleError = jest
    .spyOn(console, "error")
    .mockImplementation(() => {});

  await act(async () => {
    ReactDOM.render(
      <StyleProvider value={{isDark: false}}>
        <Projects />
      </StyleProvider>,
      container
    );
    await Promise.resolve();
  });
  await act(async () => {
    await Promise.resolve();
  });

  const errors = consoleError.mock.calls.flat().join(" ");
  consoleError.mockRestore();
  expect(container.querySelectorAll(".repo-card")).toHaveLength(1);
  expect(errors).not.toContain("Cannot read properties of null (reading 'id')");
  ReactDOM.unmountComponentAtNode(container);
});
