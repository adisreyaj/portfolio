import React from 'react';
import SectionHeading from '../SectionHeading';

const Contact = () => {
  return (
    <section className="container site-section" id="contact">
      <SectionHeading heading="Chat?" subheading="contact" />
      <div className="mt-10" style={{ maxWidth: 600 }}>
        <p>
          I would love to connect! If it is for an upcoming project or just want
          to talk #tech, Feel free to reach out me on&nbsp;
          <a
            href="mailto:adi.sreyaj@gmail.com"
            rel="noopener noreferrer"
            className="font-semibold underline text-primary"
          >
            my email
          </a>
          &nbsp;or via&nbsp;
          <a
            href="https://twitter.com/Adisreyaj"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline text-primary"
          >
            Twitter
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
