import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

test("renders a <article> element", () => {
  render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  const articleElement = screen.queryByRole("article");
  expect(articleElement).toBeInTheDocument();
});

test("renders a <h3> with the title of the post", () => {
  render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  const h3Element = screen.getByText(/Components 101/);
  expect(h3Element).toBeInTheDocument();
});

test("renders a <small> with the date of the post", () => {
  render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  const smallElement = screen.getByText(/December 15, 2020/);
  expect(smallElement).toBeInTheDocument();
});

test("uses a default value for the date if no date is passed as a prop", () => {
  render(
    <Article
      title={"Components 101"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  const smallElement = screen.getByText(/January 1, 1970/);
  expect(smallElement).toBeInTheDocument();
});

test("renders a <p> with the preview text", () => {
  render(
    <Article
      title={"Components 101"}
      date={"December 15, 2020"}
      preview={"Setting up the building blocks of your site"}
    />
  );
  const pElement = screen.getByText(
    /Setting up the building blocks of your site/
  );
  expect(pElement).toBeInTheDocument();
  expect(pElement.tagName).toBe("P");
});