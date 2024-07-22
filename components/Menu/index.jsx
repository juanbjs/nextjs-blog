'use client'

import Link from "next/link";
import ThemeToggler from "../Header/ThemeToggler";

export default function Menu() {
  return (
    <section className="w-full border-b">
      <div className="max-w-screen-lg mr-auto ml-auto">
        <div>
          <nav className="flex justify-center">
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