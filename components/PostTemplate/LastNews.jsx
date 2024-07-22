import MiniPost from "./MiniPost";

export default function LastNews({posts}) {

  return (
    <section className="w-full">
      <div className="max-w-screen-lg mr-auto ml-auto">
        <div className="pt-8 pb-8 ">
          <div>
            <h1 className="mb-4 text-2xl font-light leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">
              {'ÚLTIMAS NOTICIAS'}
            </h1>
          </div>
          <div className="grid grid-cols-12">
            {
              posts.map((item, key) => (
                <div key={`minipost-${key}`} className="col-span-3">
                  <MiniPost post={item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}