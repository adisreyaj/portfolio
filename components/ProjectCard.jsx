import React from 'react';

const ProjectCard = ({ project }) => {
  const links = Object.keys(project.links)
    .map((key) => ({ key, value: project.links[key] }))
    .filter((item) => item.value != undefined);
  return (
    <article className="grid items-center grid-cols-10 gap-2 xl:gap-10 project-card">
      <div className="relative col-span-10 lg:col-span-5 project-card__image">
        <img
          src={`/images/projects/${project.image}.png`}
          className="object-cover"
        />
      </div>
      <div className="z-10 col-span-10 p-2 md:p-4 lg:col-span-5 project-card__content">
        <h3 className="mt-4 text-xl font-semibold text-transparent line-clamp-2 bg-primary-gradient bg-clip-text">
          {project.title}
        </h3>
        <h5 className="mb-1">{project.subtitle}</h5>
        <div className="flex gap-2 mt-2 mb-4 project-card__links">
          {links.map(({ key, value }, index) => {
            return (
              <>
                <a
                  className="font-semibold text-primary"
                  href={project.links[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {key}
                </a>

                {index !== links.length - 1 && '/'}
              </>
            );
          })}
        </div>
        <div className="p-4 rounded-md bg-dark-gradient project-card__description">
          <p className="text-sm line-clamp-3">{project.description}</p>
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
