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
      <div className="flex gap-4 mt-8">
        {tech.map((item) => {
          return (
            <article key={item}>
              <img src={`/images/tech/${item}.svg`} alt={item} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
