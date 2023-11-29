import React, { useState } from "react";
import Card from "./Card";
import projects from "@/lib/projects";
import { motion } from "framer-motion";

export default function Projets() {
  return (
    <>
      <div
        id="projects"
        className=" py-10 w-full flex justify-center items-center flex-col bg-[#2B2140] "
      >
        <h1 className="mt-10 pt-20  font-bold text-5xl text-[--white]">
          Projects
        </h1>

        <div className=" w-[80%] mt-20 rounded-xl grid gap-x-5 gap-y-8 grid-auto place-items-center overflow-x-hidden">
          {projects.map((el, index) => {
            return (
              <Card
                key={index}
                i={index + 1}
                title={el.title}
                repo={el.repo}
                img={el.img}
                tools={el.tools}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
