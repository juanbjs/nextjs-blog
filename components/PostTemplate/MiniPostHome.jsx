import PropTypes from 'prop-types';

import { fullDateFormat } from "@/util/dateFormat";
import Image from 'next/image';

MiniPostHome.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  content: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default function MiniPostHome({title, slug, url, urlToImage, publishedAt, time, content, description}) {

    return (
      <div className="flex space-x-2">
        <div className="w-3/5">
          <div className="main-img row-span-3">
            <Image src={urlToImage} alt={title} loading="lazy" width={500} height={500}/>
          </div>
        </div>
        <div className="w-2/5">
          <div className="post-title pb-2">
            <h4 className="font-bold text-gray-900 dark:text-white text-base line-clamp-3">
              <a href={url} title={title} target="_blank" >{title}</a>
            </h4>
          </div>
          <div className="post-date pb-2">
            <time className="text-sm text-gray-500 dark:text-gray-400" dateTime={publishedAt}>
              {fullDateFormat(publishedAt)}
            </time>
          </div>
          <div className="post-text">
              <p className="text-gray-700 dark:text-gray-600 text-sm line-clamp-3">
                  {description}
              </p>
          </div>
        </div>
      </div>
    )
  }