import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <article className="glass-card blog-card">
      <header className="relative w-full h-40 xl:h-52">
        {/* <Image
          src={project.image}
          className="rounded-md"
          layout="fill"
          objectFit="cover"
          alt={project.title}
        /> */}
      </header>
      <div className="blog-card__content">
        <a href={`https://blog.sreyaj.dev/${project.slug}`} target="blank">
          <h3 className="mt-4 font-semibold text-transparent line-clamp-2 bg-primary-gradient bg-clip-text">
            {project.title}
          </h3>
        </a>
        <h5 className="">{project.subtitle}</h5>
        <p className="mt-2 text-sm line-clamp-3">{project.description}</p>
        <div className="mt-4">
          <h6 className="font-semibold">Powered by</h6>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.technologies.map((tech) => {
              return (
                <article>
                  <img
                    width="50px"
                    height="50px"
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
