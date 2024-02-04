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
    directionLeft: false,
    percentage: "70%",
  },
  {
    name: "Skill 4",
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    directionLeft: false,
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
    directionLeft: false,
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
    directionLeft: false,
    percentage: "55%",
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
    directionLeft: false,
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
    directionLeft: false,
    percentage: "55%",
  },
];

export default function Skills({}: Props) {
  return (
    <motion.div className="flex flex-col text-center p-10 justify-center items-center h-[100vh] w-[100%] z-10">
      <div>
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
        hover over a skill for current proficiency
      </h3>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-20">
        {skillsData.map((skill, index) => (
          <Skill
            key={index}
            src={skill.src}
            directionLeft={index%4==2 || index%4==3 ? false : true}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </motion.div>
  );
}
