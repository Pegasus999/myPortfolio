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
      className="min-h-screen w-full flex justify-center items-center bg-cover bg-center "
      style={{
        backgroundImage: `url(${Wallpaper})`,
      }}
    >
      <div className="max-w-[1200px] w-[70%] flex justify-center items-center flex-wrap-reverse">
        <div className="max-w-[500px] w-[62%]">
          <div className="text-white text-5xl font-bold">Hi, I am Adem</div>
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
          <p className="mt-5 text-xl text-[--white]">
            I'm a freelance who can create anything!
            <br /> Let's bring your ideas to life
          </p>
          <div className="mt-5 h-10 w-64  flex justify-evenly items-center">
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
          <Button className="w-64 h-16 mt-5 hover:font-bold hover:bg-[--purpleLight] ">
            Resume
          </Button>
        </div>
        <div className="ml-10">
          <Lottie animationData={coder} loop={true} />
        </div>
      </div>
    </div>
  );
}
