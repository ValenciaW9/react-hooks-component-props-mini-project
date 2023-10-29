import React from "react";

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