import React from "react";

import Card from "./Card";
export default function Projets() {
  const technologies = ["Node Js", "Typescript", "Node Js", "Postgresql"];

  return (
    <div className="px-20 py-10 w-full flex justify-center items-center flex-col bg-[#2B2140]">
      <h1 className="mt-10 pt-20  font-bold text-5xl text-[--white]">
        Projects
      </h1>
      <div className=" h-[750px] w-[80%]  flex justify-around items-center gap-5">
        <div className="h-[80%] w-[80%] bg-[--purpleLight] flex justify-center items-center rounded-2xl  pt-5">
          <Card
            title="Title"
            repo="repo"
            tools={[
              "Node Js",
              "TypeScript",
              "Postgresql",
              "Flutter",
              "Express",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
