import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between mx-auto max-w-7xl xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/jrkprogramming"
          fgColor="gray"
          bgColor="transparent"
        />
        {/* <SocialIcon
          url="https://instagram.com/jrkviews"
          fgColor="gray"
          bgColor="transparent"
        /> */}
        <SocialIcon
          url="https://linkedin.com/in/joserafaelkaibigan"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/* Avatar */}
        {/* <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        /> */}
        <svg
          className="w-6 h-6 mr-1 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
        <Link
          href="https://docs.google.com/document/d/17eNTTbhZfwOiMyB3zY8G5Yn_ln2OxZ0sH14FBkgcns4/edit?usp=sharing"
          className="hidden text-sm text-gray-300 uppercase md:inline-flex"
        >
          Resumè
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
