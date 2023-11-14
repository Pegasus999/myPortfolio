import React, { useState } from "react";
import { Button } from "../ui/button";

export const NavBar = () => {
  const [selected, setSelected] = useState<number>(0);
  const tabs = ["Home", "Services", "Projects", "Contact"];
  return (
    <div className="w-screen h-20 bg-[--greyish] flex justify-between items-center px-20">
      <div className="ml-20 font-[italionno] text-4xl italic">PEGASUS</div>
      <div className="flex flex-row gap-10 px-4">
        {tabs.map((title, index) => {
          return (
            <div className="w-28 h-10 flex justify-center items-center p-7">
              <Button
                onClick={() => {
                  setSelected(index);
                }}
                className={`${
                  selected == index
                    ? "bg-[--purple] text-[--white] font-bold"
                    : "bg-[--greyish] text-[--dark] hover:text-[--white] hover:bg-[--purpleLight] font-normal "
                } select-none
              `}
              >
                {title}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
