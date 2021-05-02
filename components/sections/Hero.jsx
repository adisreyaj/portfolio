import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative py-10 xl:py-40 2xl:py-60" id="home">
      <div className="absolute top-0 w-full xl:top-10 2xl:top-16">
        <img
          src="/images/developer.svg"
          width="100%"
          height="100%"
          alt="developer"
        />
      </div>
      <div className="container flex flex-wrap items-center lg:flex-nowrap">
        <div className="order-2 lg:order-1">
          <h1 className="mb-4">Adithya Sreyaj</h1>
          <p className="w-full text-white lg:w-4/5 max-w-96 md:text-lg xl:text-lg 2xl:text-xl !xl:leading-9">
            A Full stack developer working with Web technologies. <br />
            Loves to build highly scalable and maintainable web applications and
            back-ends. Loves everything <strong>JavaScript</strong>
          </p>
          <div className="mt-10 xl:mt-16">
            <a href="" className="button primary">
              Resume
            </a>
          </div>
        </div>
        <div className="relative order-1 mb-5 lg:mb-0 lg:order-2 w-60 h-60 lg:w-96 lg:h-96">
          <Image
            src="/images/adithya.png"
            layout="fill"
            objectFit="contain"
            alt="Adithya Sreyaj"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
