import React from 'react';
import SectionHeading from '../SectionHeading';

const About = () => {
  return (
    <section className="container site-section" id="about">
      <SectionHeading heading="Know Me" subheading="about" />
      <div className="mt-10 xl:text-lg">
        <p className="mb-4">
          I work as a <strong>Sr.Front-end Engineer</strong> at{' '}
          <a
            href="https://hypersonix.ai"
            rel="noopener noreferrer"
            target="_blank"
            className="underline text-primary"
            aria-label="Hypersonix"
          >
            <strong>Hypersonix</strong>
          </a>
          &nbsp; where I help build the the leading enterprise AI platform for
          consumer commerce businesses.
        </p>
        <p className="mb-4">
          I am passionate about all things web. I have worked in multiple
          projects during these years in tech on large scale projects. I stress
          on the importance of having good structure and proper architecture
          while building applications. I like my code to be clean without any
          squiggly lines.
        </p>
        <p>
          I am based off of Kerala, IN. People call it “Gods own country”.
          Google it and you’ll feel the same. When I’m not fiddling around with
          code, I tend to play games, watch series, play badminton, a little bit
          of travelling and more.
        </p>
      </div>
    </section>
  );
};

export default About;
