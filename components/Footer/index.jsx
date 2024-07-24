import Link from "next/link"
import Body from "../Body"
import FacebookIcon from "../Icons/FacebookIcon"
import InstagramIcon from "../Icons/InstagramIcon"
import XIcon from "../Icons/XIcon"
import YoutubeIcon from "../Icons/YoutubeIcon"

export default function Footer() {
  return (
    <Body>
      <div className="sm:flex sm:items-center">
        <div className="logo flex-1 pb-8">
          <Link href="/">
            <p className="text-2xl">
              {'Next JS - Blog'}
            </p>
          </Link>
        </div>
        <div className="text-center pb-8">
          <p className="text-sm border-b-4 border-green-300">
            {'created by'}
          </p>
          <Link href="https://github.com/juanbjs" target="_blank">
            <p className="text-base">
              {'Juan Zarate'}
            </p>
          </Link>
        </div>
        <div className="rrss flex-1 pb-8">
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