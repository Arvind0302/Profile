"use client";
import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
type Props = {};

type SkillItem = {
  name: string;
  src: string;
  directionLeft: boolean;
  percentage: string;
};

const skillsData: SkillItem[] = [
  {
    name: "Skill 1",
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    directionLeft: true,
    percentage: "100%",
  },
  {
    name: "Skill 2",
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    directionLeft: true,
    percentage: "85%",
  },
  {
    name: "Skill 3",
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    directionLeft: true,
    percentage: "70%",
  },
  {
    name: "Skill 4",
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    directionLeft: true,
    percentage: "95%",
  },
  {
    name: "Skill 5",
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    directionLeft: true,
    percentage: "60%",
  },
  {
    name: "Skill 6",
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    directionLeft: true,
    percentage: "75%",
  },
  {
    name: "Skill 7",
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    directionLeft: true,
    percentage: "90%",
  },
  {
    name: "Skill 8",
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    directionLeft: true,
    percentage: "80%",
  },
  {
    name: "Skill 9",
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    directionLeft: true,
    percentage: "65%",
  },
  {
    name: "Skill 10",
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    directionLeft: true,
    percentage: "55%",
  },
];

export default function Skills({}: Props) {
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skillsData.map((skill, index) => (
          <Skill
            key={index}
            src={skill.src}
            directionLeft={skill.directionLeft}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </motion.div>
  );
}
