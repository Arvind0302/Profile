"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="https://i.pinimg.com/736x/22/9a/05/229a05f9751700bd4445a6f90477dc03.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        alt=""
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-basic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          architecto sunt ipsam quisquam in sequi delectus voluptate magni eos
          obcaecati exercitationem, deserunt officiis. Laboriosam itaque
          deleniti error quos porro atque! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Ratione iusto suscipit ea nesciunt
          perspiciatis. Nesciunt dolorum accusantium molestiae sint!
          Exercitationem quas nobis nam illo. Autem deserunt fugit quis dolores
          architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Libero corporis excepturi aut atque saepe. Ut, dolor. Doloremque
          accusamus sapiente aperiam eaque, ex illum exercitationem, ad
          obcaecati impedit quam et voluptas. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam tempora rerum minus tempore,
          optio vel? Dolore, modi molestiae optio sunt exercitationem eum!
          Officiis omnis magnam ducimus eos quam ex ab?
        </p>
      </div>
    </motion.div>
  );
}
