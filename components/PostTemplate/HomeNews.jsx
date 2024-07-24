import PropTypes from 'prop-types';

import Body from "../Body/Body";
import LastNews from "./LastNews";
import MainPostHome from "./MainPostHome";
import MiniPostHome from "./MiniPostHome";

HomeNews.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default async function HomeNews({posts}) {

    return (
      <Body>
        <div className="main-post">
          <h6 className="font-bold">{'Notas destacadas'}</h6>
          <div className="posts grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            {
              posts.slice(0, 1).map(item => (
                <div className="row-span-2" key={`main-post-${item.title.replaceAll(' ', '-')}`}>
                  <MainPostHome
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
            {
              posts.slice(1, 3).map(item => (
                <div key={`minipost-${item.title.replaceAll(' ', '-')}`} className="row-span-1">
                  <MiniPostHome
                    title={item.title}
                    slug={item.slug}
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
        <div className="pt-8">
          <LastNews posts={posts.slice(4)} />
        </div>
      </Body>
    );
  }