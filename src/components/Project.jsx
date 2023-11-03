import React from "react";

const Project = ({ name, description, githubLink, liveDemoLink }) => {
  return (
    <div className="project">
      <h3>{name}</h3>
      <p>{description}</p>
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      )}
      {liveDemoLink && (
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      )}
    </div>
  );
};

export default Project;
