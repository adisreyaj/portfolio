import React from 'react';
import SectionHeading from '../SectionHeading';
import TalkCard from '../TalkCard';

const Talks = ({ talks }) => {
  return (
    <section className="container site-section" id="talks">
      <SectionHeading heading="Events" subheading="talks" />
      <div className="mt-10 xl:text-lg">
        <section className="relative grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {talks.map((talk) => {
            return <TalkCard key={talk.tile} talk={talk} />;
          })}
        </section>
      </div>
    </section>
  );
};

export default Talks;
