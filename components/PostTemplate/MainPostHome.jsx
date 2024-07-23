import { fullDateFormat } from "@/util/dateFormat";

export default function MainPostHome({post}) {

    const {title, url, urlToImage, publishedAt, content, description} = post;
  
    return (
      <div className="pt-4 pb-2 flex flex-col">
        <div className="main-img pb-4">
          <img src={urlToImage} alt={title} />
        </div>
        <div className="post-title pb-2">
          <h4 className="font-bold text-gray-900 dark:text-white text-base line-clamp-3">
            <a href={url} title={title} target="_blank" >{title}</a>
          </h4>
        </div>
        <div className="post-date pb-2">
          <time className="text-base text-gray-500 dark:text-gray-400" dateTime={publishedAt}>
            {fullDateFormat(publishedAt)}
          </time>
        </div>
        <div className="post-text">
            <p className="text-gray-700 dark:text-gray-600 text-sm sm:text-sm line-clamp-3">
                {description}
            </p>
        </div>
      </div>
    )
  }