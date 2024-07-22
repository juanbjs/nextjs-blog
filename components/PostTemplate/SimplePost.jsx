
export default function SimplePost({post}) {

  const {title, slug, date, time, text} = post;

  return (
    <section className="w-full">
      <div className="max-w-screen-lg mr-auto ml-auto">
        <div className="pt-8 pb-8 ">
          <div className="post-title">
            <h1 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">
              {title}
            </h1>
          </div>
          <div className="flex text-base text-gray-500 dark:text-gray-400">
            <time className="mr-2" dateTime="2024-02-08">
              {date}
            </time >
            <time>
              {time}
            </time>
          </div>
          <div className="post-text" dangerouslySetInnerHTML={{__html: text}}>
          </div>
        </div>
      </div>
    </section>
  )
}