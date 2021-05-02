import React from 'react';
import SectionHeading from '../SectionHeading';

const Contact = () => {
  return (
    <section className="container site-section">
      <SectionHeading heading="Chat?" subheading="contact" />
      <div className="mt-8" style={{ maxWidth: 600 }}>
        <p>
          I would love to connect! If it is for an upcoming project or just want
          to talk #tech, Feel free to reach out me on{' '}
          <strong className="underline text-primary">my email</strong> or via{' '}
          <strong className="underline text-primary">Twitter</strong>
        </p>
      </div>
    </section>
  );
};

export default Contact;
