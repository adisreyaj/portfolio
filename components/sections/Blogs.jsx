import React from 'react';
import BlogCard from '../BlogCard';
import SectionHeading from '../SectionHeading';

const Blogs = ({ posts }) => {
  return (
    <section className="container site-section" id="blog">
      <SectionHeading heading="Blog" subheading="posts" />
      <div className="relative grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {posts.slice(0, 6).map((post) => (
          <BlogCard post={post} key={post.cuid} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
