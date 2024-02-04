"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <nav className="sticky bottom-0 p-5 flex items-center justify-center max-w-7xl mx-auto z-20 xl:items-center h-[10vh]">
      <motion.ul className="flex flex-row items-center justify-evenly w-[30rem] h-[3.25rem] p-2 rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      initial={{
        y:+100,
        opacity:0,
        scale:0.5
      }}
      animate={{
        y:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1
      }}
              >
        <li className="flex items-center justify-center relative">
          <Link
            className="flex w-full items-center justify-center hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
            href={""}
          >
            Home
          </Link>
          </li>
          <li className="flex items-center justify-center relative">
          <Link
            className="flex w-full items-center justify-center hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
            href={""}
          >
            About
          </Link>
        </li>
        <li className="flex items-center justify-center relative">
          <Link
            className="flex w-full items-center justify-center hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
            href={""}
          >
            Experience
          </Link>
        </li>
        <li className="flex items-center justify-center relative">
          <Link
            className="flex w-full items-center justify-center hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
            href={""}
          >
            Skills
          </Link>
        </li>
        <li className="flex items-center justify-center relative">
          <Link
            className="flex w-full items-center justify-center hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
            href={""}
          >
            Projects
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
}
