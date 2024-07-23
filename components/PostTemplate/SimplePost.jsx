
export default function SimplePost({post}) {

  const {title, slug, date, time, text} = post;

  return (
    <section className="w-full">
      <div className="mr-auto ml-auto sm:px-6 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-4xl xl:px-0">
        <div className="pt-8 pb-8 ">
          <div className="post-title">
            <h1 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 dark:text-white text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
              {title}
            </h1>
          </div>
          <div className="flex text-base text-gray-500 dark:text-gray-400 pb-2">
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