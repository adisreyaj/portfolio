import VSCodeItemCard from '@/components/DevSetupItemCard';
import SectionHeading from '@/components/SectionHeading';
import React from 'react';

const DevSetup = ({ extensions }) => {
  return (
    <section className="container site-section">
      <SectionHeading heading="Dev Environment" subheading="setup" />
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
        {extensions.map((extension) => (
          <VSCodeItemCard key={extension.name} extension={extension} />
        ))}
      </div>
    </section>
  );
};
export default DevSetup;
