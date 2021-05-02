import React from 'react';
import SectionHeading from '../SectionHeading';

const Tech = () => {
  const tech = [
    'angular',
    'react',
    'js',
    'ts',
    'sass',
    'node',
    'nest',
    'mongo',
    'postgres',
    'git',
    'docker',
    'figma',
    'vscode',
  ];
  return (
    <section className="container site-section">
      <SectionHeading heading="Tech" subheading="stack" />
      <div className="flex flex-wrap gap-6 mt-8 lg:gap-12">
        {tech.map((item) => {
          return (
            <article className="tech-card" key={item}>
              <img
                src={`/images/tech-stack/${item}.svg`}
                alt={item}
                width="90px"
                height="90px"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
