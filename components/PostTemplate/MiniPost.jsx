import Image from "next/image";

export default function MiniPost({post}) {

    const {title, slug, main_img, date, time, text, extract} = post;
  
    return (
      <div className="pt-4 pb-4">
        <div className="main-img pb-4">
          <img src={main_img} alt={title} />
        </div>
        <div className="post-title pb-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h4>
        </div>
        <div className="post-date flex pb-4">
          <p className="text-base text-gray-500 dark:text-gray-400">
            {date}
          </p>
        </div>
        <div className="post-text">
            <p className="text-base text-gray-700 dark:text-gray-600">
                {extract}
            </p>
        </div>
      </div>
    )
  }