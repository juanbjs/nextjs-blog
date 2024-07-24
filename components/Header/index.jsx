import Link from "next/link";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import XIcon from "../Icons/XIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import Body from "../Body";

export default function Header() {

  return (
    <Body>
      <div className="flex items-center">
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
    </Body>
  )
}