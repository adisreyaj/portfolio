import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

const linkTitle = {
  video: 'Video',
  git: 'Github',
  slides: 'Slides',
  demo: 'Demo',
};
const TalkCard = ({ talk }) => {
  return (
    <article className="glass-card">
      <header className="relative w-full h-52 xl:h-52">
        <Image
          src={talk.image}
          className="rounded-md"
          layout="fill"
          objectFit="cover"
          alt={talk.title}
        />
      </header>
      <section className="w-full p-2">
        <a href={talk.links[0].url} rel="noopener noreferrer" target="_blank">
          <h3
            className="mt-4 font-semibold text-transparent line-clamp-2 bg-primary-gradient bg-clip-text"
            style={{ minHeight: 50 }}
          >
            {talk.title}
          </h3>
        </a>
        {/* <p className="my-2 text-sm line-clamp-3">{talk.description}</p> */}
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs">{dayjs(talk.date).format('DD MMM YYYY')}</p>
          <a
            href={talk.host.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-primary"
          >
            <p className="">{talk.host.name}</p>
          </a>
        </div>
        <div className="flex gap-2 my-2 text-sm talk-card__links">
          {talk.links
            .slice(1, talk.links.length)
            .map(({ type, url }, index) => {
              return (
                <React.Fragment key={url}>
                  <a
                    className="font-semibold text-primary"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkTitle[type]}
                  </a>

                  {index !== talk.links.length - 2 && '/'}
                </React.Fragment>
              );
            })}
        </div>
      </section>
    </article>
  );
};

export default TalkCard;
