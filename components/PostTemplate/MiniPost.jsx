import PropTypes from 'prop-types';

import { fullDateFormat } from "@/util/dateFormat";
import Image from "next/image";

MiniPost.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  content: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default function MiniPost({id, title, url, urlToImage, publishedAt, content, description}) {
 
    return (
      <div className="pt-4 pb-4" id = {id}>
        <div className="main-img pb-4">
          <Image src={urlToImage} alt={title} loading="lazy" width={500} height={500}/>
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