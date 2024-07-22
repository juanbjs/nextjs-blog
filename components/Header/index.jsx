import Link from "next/link";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import XIcon from "../Icons/XIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

export default function Header() {

  return (
    <section className="w-full">
      <div className="max-w-screen-lg mr-auto ml-auto">
        <div className="grid grid-cols-12 gap-4 pt-8 pb-8">
          <div className="logo col-span-3 flex items-center">
            <Link href="/">
              <p className="text-2xl">
                {'Next JS - Blog'}
              </p>
            </Link>
          </div>
          <div className="center col-span-7"></div>
          <div className="rrss col-span-2">
            <div className="flex">
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