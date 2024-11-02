import { project } from "@/types";
import { useEffect, useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { createPortal } from "react-dom";
import { Button } from "../ui/button";

import { IoIosCloseCircle } from "react-icons/io";

export default function Card({ title, tools, repo, img, i }) {
  const [index, setIndex] = useState<number>(0);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className=" snap-center mx-auto flex flex-col rounded-[12px] w-[300px] min-h-[450px] cursor-pointer p-1 relative overflow-hidden group"
        style={{ animationDelay: `${(60 + 1) * i}ms` }}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div className="absolute w-full top-12 h-full bg-[#ededed] bg-opacity-5 group-hover:bg-white/[.02] rounded-3xl duration-200 blur-xl"></div>
        <div className="rounded-lg overflow-hidden w-full flex flex-[3] ">
          <img
            src={img[index]}
            alt=""
            width={400}
            height={0}
            className="aspect-video group-hover:scale-105 object-contain duration-200"
          />
        </div>
        <div className="flex flex-col flex-[2] mt-3">
          <div className=" flex justify-center items-center px-2 mt-2 text-2xl text-[--white] tracking-widest text-center">
            <h4>{title}</h4>
          </div>
          <div className="flex flex-wrap gap-2 px-2 mt-6">
            {tools.map((tool, i) => (
              <Chip key={i}>{tool}</Chip>
            ))}
          </div>
          <div className="mt-auto p-2 flex flex-row-reverse gap-2 z-10">
            {!!repo && (
              <a href={repo} target="_blank">
                <BsGithub size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      {showModal && <Portal onClose={() => setShowModal(false)} img={img} />}
    </>
  );
}

function Chip({ children }: { children: string }) {
  return (
    <div className="w-20 text-[--white] text-center rounded-full border border-[--purple] text-xs px-1 font-semibold whitespace-nowrap">
      {children}
    </div>
  );
}

function Portal({ onClose, img }) {
  const [index, setIndex] = useState(0);
  const [website, setWebsite] = useState<boolean>(false);

  const handleImageLoad = (e: any) => {
    const image = e.target;

    if (image.naturalWidth > image.naturalHeight) {
      setWebsite(true);
    } else {
      setWebsite(false);
    }
  };
  return (
    <>
      {createPortal(
        <div className="fixed top-0 left-0 w-full h-full bg-white/5 backdrop-blur-md z-[1000] flex items-center justify-center">
          <div className="bg-white max-w-6xl w-full md:w-5/6 aspect-video rounded-3xl p-1 relative group select-none">
            <Button
              onClick={onClose}
              size="sm"
              className="text-2xl bg-white text-black hover:text-white border-2 absolute right-5"
            >
              <IoIosCloseCircle />
            </Button>
            <div className="flex justify-between items-center h-full">
              <Button
                size="sm"
                onClick={() => {
                  setIndex((prev) => {
                    return prev == 0 ? img.length - 1 : prev - 1;
                  });
                }}
              >
                <FaAngleLeft />
              </Button>
              <div
                className={`object-contain 2xl:${website ? "" : " w-[25%]"} `}
              >
                <img
                  className=""
                  src={img[index]}
                  alt=""
                  onLoad={(e) => handleImageLoad(e)}
                />
              </div>
              <Button
                size="sm"
                onClick={() => {
                  setIndex((prev) => {
                    return prev == img.length - 1 ? 0 : prev + 1;
                  });
                }}
              >
                <FaAngleRight />
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
