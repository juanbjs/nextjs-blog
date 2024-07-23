import Image from "next/image";

export default function MiniPost({post}) {

  const {title, url, urlToImage, publishedAt, content, description} = post;
  
    return (
      <div className="pt-4 pb-4">
        <div className="main-img pb-4">
          <img src={urlToImage} alt={title} />
        </div>
        <div className="post-title pb-4">
          <h4 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
            <a href={url} title={title} target="_blank" >{title}</a>
          </h4>
        </div>
        <div className="post-date flex pb-4">
          <p className="text-base text-gray-500 dark:text-gray-400">
            {publishedAt}
          </p>
        </div>
        <div className="post-text">
            <p className="text-gray-700 dark:text-gray-600 text-sm sm:text-sm">
                {description}
            </p>
        </div>
      </div>
    )
  }