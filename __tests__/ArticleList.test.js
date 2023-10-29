import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

import React from 'react';
const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
  },
  {
    id: 3,
    title: "Function Components vs Class Components",
    date: "December 10, 2020",
    preview: "React, meet OOJS.",
  },
];

test("renders a <main> element", () => {
  render(<ArticleList posts={posts} />);
  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();
});

test("renders an Article component for each post passed as a prop", () => {
  render(<ArticleList posts={posts} />);
  const articleElements = screen.getAllByRole("article");
  expect(articleElements).toHaveLength(posts.length);
});