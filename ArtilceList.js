import React from "react";
import About from "/About";
import ArticleList from "./ArticleList";
import Header from "./Header";


const ArticleList = ({ posts, Article }) => {
  return (
    <main>
      {posts.map((post, index) => (
        <Article key={index} post={post} />
      ))}
    </main>
  );
};

export default ArticleList;