"use client";

import { Providers } from "./providers";

import "../styles/index.css";

import PropTypes from 'prop-types';
import PublicLayout from "@/components/Layouts/PublicLayout";

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning  lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Blog</title>
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
