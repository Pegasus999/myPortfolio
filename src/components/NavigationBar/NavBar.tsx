import React, { useState } from "react";
import { Button } from "../ui/button";

export const NavBar = () => {
  const [selected, setSelected] = useState<number>(0);
  const tabs = ["Home", "Services", "Projects", "Contact"];
  return (
    <div className="w-full fixed z-10 h-20 bg-transparent flex justify-between items-center px-10">
      <div className="ml-20 font-[italionno] text-[--white] text-4xl italic">
        PEGASUS
      </div>
      <div className="flex flex-row gap-10 px-4">
        {tabs.map((title, index) => {
          return (
            <div
              className="w-28 h-10 flex justify-center items-center p-7"
              key={index}
            >
              <Button
                onClick={() => {
                  setSelected(index);
                }}
                className={`${
                  selected == index
                    ? "bg-[--white] text-[--dark] font-bold hover:text-[--white] hover:bg-[--purpleLight]"
                    : "bg-transparent text-[--white] font-semibold hover:text-[--white] hover:bg-[--purpleLight]  "
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
