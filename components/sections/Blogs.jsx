import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import SectionHeading from '../SectionHeading';

const Blogs = ({ posts }) => {
  console.log(posts);
  return (
    <section className="container site-section">
      <SectionHeading heading="Blogs" subheading="posts" />
      <div className="grid gap-6 mt-10 xl:grid-cols-3 2xl:grid-cols-4">
        {posts.slice(0, 6).map((post) => {
          return (
            <article key={post.cuid}>
              <header className="relative w-full 2xl:h-40 xl:h-52">
                <Image src={post.coverImage} layout="fill" objectFit="cover" />
              </header>
              <div>
                <a href={`https://blog.sreyaj.dev/${post.slug}`} target="blank">
                  <h4 className="mt-4 font-semibold text-transparent line-clamp-2 bg-primary-gradient bg-clip-text">
                    {post.title}
                  </h4>
                </a>
                <div className="flex gap-4 py-1">
                  <p className="text-xs">
                    {dayjs(post.dateUpdated).format('DD MMM')}
                  </p>
                  <div className="flex items-center gap-1 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path
                        d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
                        fill="#fff"
                      />
                    </svg>
                    <p>{post.totalReactions}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm line-clamp-3">{post.brief}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
