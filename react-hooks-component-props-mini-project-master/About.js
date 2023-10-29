import React from "react";

const About = ({ blogname, about }) => {
  return (
    <aside>
      <img
        src="https://via.placeholder.com/215"
        alt="blog logo"
      />
      <h2>About</h2>
      <div>{blogname}</div>
      <p>{about}</p>
    </aside>
  );
};

export default About;