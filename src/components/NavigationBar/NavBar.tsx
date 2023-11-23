import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const NavBar = () => {
  const [selected, setSelected] = useState<number>(0);
  const tabs = ["Home", "Projects", "Contact"];
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed z-10 h-20 ${
        scrollPosition > 780 ? "bg-[--purpleLight]" : "bg-transparent"
      } transition-colors duration-200 flex justify-between items-center px-10`}
    >
      <div className="ml-20 font-[italionno] text-[--white] text-4xl italic"></div>
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
