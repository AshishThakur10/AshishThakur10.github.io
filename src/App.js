import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  const projects = [
    {
      name: 'Ashberri',
      description: "Ashberri is a social media application that features compatibility matching based on an AI model generated using numerology techniques. Users can post images and interact with the content by liking, commenting, and sharing.",
      githubLink: 'https://github.com/yourusername/ashberri',
      liveDemoLink: 'https://Ashberri.com',
    },
    // Add more projects if needed
  ];
  

  return (
    <div>
      <Navbar />
      <Home />
      <>
        <button className="btn  btn-primary">Button</button>
      </>
      <div className="project-section">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
