import React from 'react';

const SectionHeading = ({ heading, subheading }) => {
  return (
    <div className="relative">
      <h2 className="-mb-5">{heading}</h2>
      <div className="">
        <img
          src={`/images/${subheading}.svg`}
          height="50px"
          style={{ height: 50 }}
        />
      </div>
    </div>
  );
};

export default SectionHeading;
