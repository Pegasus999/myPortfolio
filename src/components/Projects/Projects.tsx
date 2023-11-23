import React from "react";
import Card from "./Card";

export interface project {
  title: string;
  repo: string;
  tools: string[];
}
export default function Projets() {
  const projects: project[] = [
    {
      title: "First Project",
      repo: "",
      tools: ["Node Js", "Postgresql", "flutter", "express"],
    },
    {
      title: "Second Project",
      repo: "",
      tools: ["Node Js", "Postgresql", "flutter", "express"],
    },
    {
      title: "Third Project",
      repo: "",
      tools: ["Node Js", "Postgresql", "flutter", "express"],
    },
  ];
  return (
    <div className="px-20 py-10 w-full flex justify-center items-center flex-col bg-[#2B2140]">
      <h1 className="mt-10 pt-20  font-bold text-5xl text-[--white]">
        Projects
      </h1>
      <div className=" w-[80%] mt-20 rounded-2xl overflow-y-auto grid grid-cols-3 gap-20 p-10">
        {projects.map((el, index) => {
          return (
            <Card
              key={index}
              title={el.title}
              repo={el.repo}
              tools={el.tools}
            />
          );
        })}
      </div>
    </div>
  );
}
