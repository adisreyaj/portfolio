import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <article className="grid items-center grid-cols-12 project-card">
      <div className="relative project-card__image">
        <img
          src={`/images/projects/${project.image}.png`}
          className="object-cover"
        />
      </div>
      <div className="z-10 p-4 project-card__content">
        <a href={`https://blog.sreyaj.dev/${project.slug}`} target="blank">
          <h3 className="mt-4 text-xl font-semibold text-transparent line-clamp-2 bg-primary-gradient bg-clip-text">
            {project.title}
          </h3>
        </a>
        <h5 className="mb-6">{project.subtitle}</h5>
        <div className="p-4 rounded-md bg-dark-gradient project-card__description">
          <p className="mt-2 text-sm line-clamp-3">{project.description}</p>
        </div>
        <div className="mt-4">
          <h6 className="font-semibold">Powered by</h6>
          <div className="flex flex-wrap gap-2 mt-1 project-card__tech">
            {project.technologies.map((tech) => {
              return (
                <article>
                  <img
                    width="40px"
                    height="40px"
                    src={`/images/tech-stack/${tech.icon}.svg`}
                    alt={tech.name}
                  />
                  <p className="text-xs text-center">{tech.name}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
