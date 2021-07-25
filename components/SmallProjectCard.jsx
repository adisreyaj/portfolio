import Image from 'next/image';
import React from 'react';
const SmallProjectCard = ({ project }) => {
  const links = Object.keys(project.links)
    .map((key) => ({ key, value: project.links[key] }))
    .filter((item) => item.value != undefined);
  return (
    <article className="flex flex-col p-4 glass-card small-project-card">
      <div className="relative w-full small-project-card__image h-60">
        <Image
          src={`/images/projects/${project.image}`}
          className="object-cover"
          layout="fill"
          alt={project.title}
        />
      </div>
      <div className="small-project-card__content">
        <h3 className="mt-4 text-xl font-semibold text-transparent line-clamp-2 bg-primary-gradient bg-clip-text">
          {project.title}
        </h3>
        {/* <h5 className="mb-1 line-clamp-1">{project.subtitle}</h5> */}
        <div className="mt-2">
          <p className="text-sm line-clamp-3">{project.description}</p>
        </div>
        <div className="flex gap-2 mt-2 mb-4 small-project-card__links">
          {links.map(({ key, value }, index) => {
            return (
              <React.Fragment key={index}>
                <a
                  className="font-semibold text-primary"
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {key}
                </a>

                {index !== links.length - 1 && '/'}
              </React.Fragment>
            );
          })}
        </div>
        <div className="mt-4">
          <p className="font-semibold">Powered by</p>
          <div className="flex flex-wrap gap-2 mt-1 small-project-card__tech">
            {project.technologies.map((tech) => {
              return (
                <article key={tech.name}>
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

export default SmallProjectCard;
