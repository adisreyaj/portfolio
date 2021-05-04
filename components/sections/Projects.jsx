import React from 'react';
import ProjectCard from '../ProjectCard';
import SectionHeading from '../SectionHeading';
import SmallProjectCard from '../SmallProjectCard';

const Projects = ({ projects }) => {
  return (
    <section className="container site-section" id="projects">
      <SectionHeading heading="Projects" subheading="works" />
      <div className="relative flex flex-col gap-20 mt-10">
        {projects.slice(0, 1).map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-3 2xl:grid-cols-4">
        {projects.slice(1).map((project) => (
          <SmallProjectCard project={project} key={project.title} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="https://github.com/adisreyaj"
          rel="noopener noreferrer"
          target="_blank"
          className="button primary"
        >
          View More
        </a>
      </div>
    </section>
  );
};

export default Projects;
