'use client'

import Link from "next/link";
import ThemeToggler from "../Header/ThemeToggler";
import Body from "../Body";

export default function Menu() {
  return (
    <Body className="border-b">
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
    </Body>
  )
}