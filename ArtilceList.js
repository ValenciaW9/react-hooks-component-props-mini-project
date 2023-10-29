import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post, index) => (
        <Article key={index} article={post} />
      ))}
    </main>
  );
};

export default ArticleList;