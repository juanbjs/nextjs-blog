'use client'

import Link from "next/link";
import ThemeToggler from "../Header/ThemeToggler";

export default function Menu() {
  return (
    <section className="w-full border-b">
      <div className="mr-auto ml-auto sm:px-6 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-4xl xl:px-0">
        <div>
          <nav className="flex justify-center items-center">
            <ul className="p-2">
              <Link href={'/'}>{'Inicio'}</Link>
            </ul>
            <ul className="p-2">
              <Link href={'/'}>{'Nacionales'}</Link>
            </ul>
            <ul className="p-2">
              <Link href={'/'}>{'Deportes'}</Link>
            </ul>
            <ul className="p-2">
              <Link href={'/'}>{'Tecnología'}</Link>
            </ul>
            <ul className="p-2">
              <Link href={'/'}>{'Ciencias'}</Link>
            </ul>
            <ul>
              <ThemeToggler />
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}