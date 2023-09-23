"use client"
import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type SocialLink = {
  url: string;
};

const socialLinks: SocialLink[] = [
  { url: 'https://www.github.com/Arvind0302' },
  { url: 'https://www.linkedin.com/in/arvind-yadav-88a8391bb/' },
  { url: 'https://twitter.com/ArvindY25557953' },
  { url: 'https://instagram.com/arvind.exe_' },
  { url: 'https://www.facebook.com/profile.php?id=100057740764703'}
];

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div 
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.3
      }}
      className="flex flex-row items-center">
        {/* Render social icons using map */}
        {socialLinks.map((socialLink, index) => (
          <SocialIcon
            key={index}
            url={socialLink.url}
            fgColor='gray'
            bgColor='transparent'
          />
        ))}
      </motion.div>
      <motion.div
            initial={{
                x:+500,
                opacity:0,
                scale:0.5
              }}
              animate={{
                x:0,
                opacity:1,
                scale:1
              }}
              transition={{
                duration:1
              }}
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon 
        className="cursor-pointer"
        network='email'
        fgColor='gray'
        bgColor='transparent'
        />
       <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
      </motion.div>
    </header>
  );
}
