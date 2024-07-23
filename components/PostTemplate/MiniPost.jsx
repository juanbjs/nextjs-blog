import { fullDateFormat } from "@/util/dateFormat";
import Image from "next/image";

export default function MiniPost({post}) {

  const {title, url, urlToImage, publishedAt, content, description} = post;
  
    return (
      <div className="pt-4 pb-4">
        <div className="main-img pb-4">
          <img src={urlToImage} alt={title} />
        </div>
        <div className="post-title pb-4">
          <h4 className="font-bold text-gray-900 dark:text-white text-base">
            <a href={url} title={title} target="_blank" >{title}</a>
          </h4>
        </div>
        <div className="post-date flex pb-4">
          <time className="text-sm text-gray-500 dark:text-gray-400" dateTime={publishedAt}>
            {fullDateFormat(publishedAt)}
          </time>
        </div>
        <div className="post-text">
            <p className="text-gray-700 dark:text-gray-600 text-sm">
                {description}
            </p>
        </div>
      </div>
    )
  }