import PropTypes from 'prop-types';

import MiniPost from "./MiniPost";

LastNews.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function LastNews({posts}) {

  return (
    <div>
      <div>
        <h1 className="mb-4 text-2xl font-light leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">
          {'ÚLTIMAS NOTICIAS'}
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {
          posts.map((item, key) => (
            <div key={`minipost-${key}`} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3">
              <MiniPost
                id={item.slug}
                title={item.title}
                url={item.url}
                urlToImage={item.urlToImage}
                publishedAt={item.publishedAt}
                content={item.content}
                description={item.description}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}