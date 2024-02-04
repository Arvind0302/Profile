"use client";
import React, { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
type Props = {};

export default function Hero({}: Props) {
  const handleDownload = () => {
    const resumePath =
      "https://drive.google.com/file/d/1Kt-t7p5duANuOEfg9dwqQyl1D7O1BI4p/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = resumePath;
    link.target = '_blank';
    link.download = "Arvind_Yadav.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col text-center p-10 justify-center items-center h-[80vh] w-[100%] z-10">
      <img
        src="3.jpeg"
        alt=""
        className="h-[60%] rounded-full drop-shadow-2xl grayscale"
      />
      <h1 className="text-gray-500 text-4xl my-5">
        I'm <span className="underline decoration-[teal]">Arvind Yadav</span> a{" "}
        <ReactTyped
          strings={["Full-Stack Developer"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
          style={{ color: "teal" }}
        />
      </h1>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm mb-5">
        I create websites that engage users.
      </h3>
      <button className="bg-gray-500 px-6 py-4  text-white rounded-full" onClick={handleDownload}>
        Download Resume
      </button>
    </div>
  );
}
