import React from "react";
import TypewriterComponent from "typewriter-effect";
import Wallpaper from "../../assets/images/wallpaper.png";
import { Button } from "../ui/button";
import coder from "../../assets/animations/coder.json";
import Lottie from "lottie-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function HomePage() {
  return (
    <div
      id="home"
      className="2xl:min-h-screen w-full flex justify-center items-center bg-cover bg-center "
      style={{
        backgroundImage: `url(${Wallpaper})`,
      }}
    >
      <div className=" w-[70%] flex justify-evenly  items-center text-center 2xl:text-start flex-wrap-reverse">
        <div className="2xl:max-w-[500px] w-[62%] flex justify-center items-center ">
          <div className="w-full">
            <div className="text-white text-5xl font-bold  ">Hi, I am Adem</div>
            <div className="mt-5 text-[--black] text-5xl font-bold ">
              <TypewriterComponent
                options={{
                  strings: [
                    "Web Developer",
                    "Mobile Developer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              ></TypewriterComponent>
            </div>
            <p className="mt-5 text-xl text-[--white] ">
              I'm a freelance who can create anything!
              <br /> Let's bring your ideas to life
            </p>
            <div className="2xl:w-64 mt-5 flex gap-10 justify-center items-center">
              <FaGithub
                onClick={() => {
                  window.open("https://github.com/Pegasus999", "_blank");
                }}
                className="w-10 h-10 text-[--white] hover:cursor-pointer"
              />
              <FaLinkedin
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/adem-zoghmar-831064267/",
                    "_blank"
                  );
                }}
                className="w-10 h-10 text-[--white] hover:cursor-pointer"
              />
              <FaXTwitter
                onClick={() => {
                  window.open("https://twitter.com/Pegas_Dev", "_blank");
                }}
                className="w-10 h-10 text-[--white] hover:cursor-pointer"
              />
            </div>
            <Button className="2xl:w-64 w-full p-8 mt-5 hover:font-bold hover:bg-[--purpleLight] ">
              Resume
            </Button>
          </div>
        </div>
        <div className="2xl:max-w-none max-w-[400px] flex justify-start items-start">
          <Lottie animationData={coder} loop={true} />
        </div>
      </div>
    </div>
  );
}
