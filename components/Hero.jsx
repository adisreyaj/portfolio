import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative xl:py-40 2xl:py-60">
      <div className="absolute w-full xl:top-10 2xl:top-16">
        <img src="/images/developer.svg" width="100%" height="100%" />
      </div>
      <div className="container flex items-center">
        <div>
          <h1 className="mb-4">Adithya Sreyaj</h1>
          <p className="w-full text-white lg:w-4/5 max-w-96 md:text-lg xl:text-xl 2xl:text-2xl !leading-9">
            A Full stack developer working with Web technologies. <br />
            Loves to build highly scalable and maintainable web applications and
            back-ends. Loves everything <strong>JavaScript</strong>
          </p>
          <div className="mt-16">
            <a href="" className="button primary">
              Resume
            </a>
          </div>
        </div>
        <div>
          <Image src="/images/adithya.png" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
