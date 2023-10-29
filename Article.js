import React from "react";

const Article = ({ title, date, preview }) => {
  const calculateReadingTime = () => {
    const readingTime = Math.ceil(preview.length / 200); // Assuming 200 words per minute
    const coffeeCups = Math.ceil(readingTime / 5);
    const bentoBoxes = Math.ceil(readingTime / 10);

    if (readingTime < 30) {
      return (
        <p>
          {Array(coffeeCups)
            .fill("☕️")
            .join("")}{" "}
          {readingTime} min read
        </p>
      );
    } else {
      return (
        <p>
          {Array(bentoBoxes)
            .fill("🍱")
            .join("")}{" "}
          {readingTime} min read
        </p>
      );
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      {calculateReadingTime()}
    </article>
  );
};

export default Article;