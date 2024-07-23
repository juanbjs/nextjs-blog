import Body from "../Body/Body";
import LastNews from "./LastNews";
import MainPostHome from "./MainPostHome";
import MiniPostHome from "./MiniPostHome";

export default async function HomeNews({posts}) {

    return (
      <Body>
        <div className="main-post">
          <h6 className="font-bold">{'Notas destacadas'}</h6>
          <div className="posts grid grid-cols-2 grid-rows-2 gap-4">
            <div className="row-span-3">
            {
              posts.slice(0, 1).map(item => (
                <MainPostHome post={item} />
              ))
            }
            </div>
            {
              posts.slice(1, 3).map(item => (
                <div key={`minipost-${item.title.replaceAll(' ', '-')}`} className="row-span-1">
                  <MiniPostHome post={item} />
                </div>
              ))
            }
          </div>
        </div>
        <LastNews posts={posts.slice(4)} />
      </Body>
    );
  }