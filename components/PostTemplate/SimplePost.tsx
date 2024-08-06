import React from "react";

import PropTypes from 'prop-types';
import Image from "next/image";

SimplePost.propTypes = {
  title: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string,
  time: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default function SimplePost({title, urlToImage, slug, date, time, text}) {

  return (
    <section className="w-full">
      <div className="mr-auto ml-auto sm:px-6 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-4xl xl:px-0">
        <div className="pt-8 pb-8 ">
          <div className="post-title">
            <h1 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 dark:text-white text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
              {title}
            </h1>
          </div>
          <div className="post-image pb-4">
            <Image src={urlToImage} alt={title} loading="lazy" width={1024} height={1024}/>
          </div>
          <div className="flex text-base text-gray-500 dark:text-gray-400 pb-2">
            <time className="mr-2" dateTime="2024-02-08">
              {date}
            </time >
            <time>
              {time}
            </time>
          </div>
          {
            text && (<div dangerouslySetInnerHTML={{ __html: text }} />)
          }
        </div>
      </div>
    </section>
  )
}
