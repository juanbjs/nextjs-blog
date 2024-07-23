import Link from "next/link";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import XIcon from "../Icons/XIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

export default function Header() {

  return (
    <section className="w-full">
      <div className="mr-auto ml-auto sm:px-6 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-4xl xl:px-0">
        <div className="flex items-center pt-8 pb-8">
          <div className="logo flex-1">
            <Link href="/">
              <p className="text-2xl">
                {'Next JS - Blog'}
              </p>
            </Link>
          </div>
          <div className="rrss flex-1">
            <div className="flex justify-end space-x-2">
              <FacebookIcon href={'https://www.facebook.com/'} />
              <InstagramIcon href={'https://www.instagram.com/'} />
              <XIcon href={'https://x.com/'} />
              <YoutubeIcon href={'https://www.youtube.com/'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}