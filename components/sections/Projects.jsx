import React from 'react';
import ProjectCard from '../ProjectCard';
import SectionHeading from '../SectionHeading';

const Projects = ({ projects }) => {
  return (
    <section className="container site-section" id="projects">
      <SectionHeading heading="Projects" subheading="works" />
      <div className="relative grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
        {projects.slice(0, 6).map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
