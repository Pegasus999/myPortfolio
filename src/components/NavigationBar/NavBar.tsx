import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

export const NavBar = () => {
  const [selected, setSelected] = useState<number>(0);
  const tabs = ["Home", "Projects", "Contact"];
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY < 780) {
        setSelected(0);
      } else if (window.scrollY < 2800) {
        setSelected(1);
      } else {
        setSelected(2);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`left-1/2 -translate-x-1/2 fixed z-10 h-20 ${
        scrollPosition > 180 && scrollPosition < 780
          ? "opacity-0"
          : scrollPosition > 780
          ? "bg-[--purpleLight] mt-5"
          : "bg-transparent "
      } transition-colors duration-200 flex justify-center items-center rounded-lg `}
    >
      <div className="flex flex-row gap-10 px-4">
        {tabs.map((title, index) => {
          return (
            <a
              href={`#${title.toLowerCase()}`}
              className="w-28 h-10 flex justify-center items-center p-7"
              onClick={() => {
                setSelected(index);
              }}
              key={index}
            >
              <Button
                className={`${
                  selected == index
                    ? "bg-[--white] text-[--dark] font-bold hover:text-[--white] hover:bg-[--purple]"
                    : "bg-transparent text-[--white] font-semibold hover:text-[--white] hover:bg-[--purple]"
                } select-none
              `}
              >
                {title}
              </Button>
            </a>
          );
        })}
      </div>
    </div>
  );
};
