import { gql, request } from 'graphql-request';
import Image from 'next/image';
import About from '../components/sections/About';
import Blogs from '../components/sections/Blogs';
import Career from '../components/sections/Career';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Tech from '../components/sections/Tech';
import { JOBS } from '../data/job';
import { PROJECTS } from '../data/project';

export default function Home({ posts, jobs, projects }) {
  return (
    <div className="pt-5 xl:pt-10">
      <div className="fixed -right-20 -top-20" style={{ zIndex: -1 }}>
        <Image src="/images/flare.svg" height={800} width={800} alt="flare" />
      </div>
      <div className="fixed -left-20 -bottom-40" style={{ zIndex: -1 }}>
        <Image
          src="/images/flare-bottom.svg"
          height={800}
          width={800}
          alt="flare"
        />
      </div>
      <Header />
      <main>
        <Hero />
        <Projects projects={projects} />
        <Career jobs={jobs} />
        <About />
        <Tech />
        <Blogs posts={posts} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const query = gql`
    query {
      user(username: "adisreyaj") {
        publication {
          posts(page: 0) {
            title
            coverImage
            slug
            cuid
            totalReactions
            brief
            dateUpdated
          }
        }
      }
    }
  `;
  const data = await request('https://api.hashnode.com/', query);
  return {
    props: {
      posts: data.user.publication.posts,
      jobs: JOBS,
      projects: PROJECTS,
    },
  };
}
