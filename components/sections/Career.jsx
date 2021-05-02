import React from 'react';
import SectionHeading from '../SectionHeading';

const Career = ({ jobs }) => {
  return (
    <section className="container site-section" id="career">
      <SectionHeading heading="Career" subheading="journey" />
      <div className="relative mt-10">
        {jobs.map((item) => {
          return (
            <article key={item.company} className="relative job-card">
              <header className="flex flex-wrap mb-2">
                <img
                  src={`/images/job/${item.logo}`}
                  alt={item.company}
                  height="50"
                  width="50"
                />
                <div className="block ml-4 md:hidden">
                  <div className="flex items-center">
                    <p className="mr-3 font-semibold text-md">{item.company}</p>
                    <a
                      href={item.website}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-white hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z"
                          fill="#fff"
                        />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm font-semibold">{item.designation}</p>
                  <div className="flex items-center">
                    <p className="mt-1 mr-4 text-xs">
                      {item.from} - {item.to}
                    </p>
                    <p className="text-xs">{item.location}</p>
                  </div>
                </div>
                <div className="hidden ml-4 md:block">
                  <div className="flex items-center">
                    <p className="mr-3 font-semibold text-md">{item.company}</p>
                    <a
                      href={item.website}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-white hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-5">
                    <p className="text-base font-semibold">
                      {item.designation}
                    </p>
                    <p className="text-xs">
                      {item.from} - {item.to}
                    </p>
                    <p className="text-xs">{item.location}</p>
                  </div>
                </div>
              </header>

              <div>
                <p className="text-sm">{item.role}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Career;
