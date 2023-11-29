import React from "react";
import { Button } from "../ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useToast } from "../ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  return (
    <div
      id="contact"
      className=" px-20 py-16 w-full flex justify-center items-center flex-col bg-[#2B2140]"
    >
      <div className="mt-24 text-center text-[70px] text-[--white] font-bold">
        Get in touch with me
      </div>
      <p className="sm:min-w-[40%] lg:w-[50%] mt-16 text-[20px] text-[--white] text-center">
        My inbox is always open. Whether you have a question or just want to say
        hello, I'll try my best to get back to you! Feel free to mail me about
        any relevant job updates.
      </p>

      <Button
        className="mt-20  bg-transparent border border-[--white] hover:bg-white hover:text-[--dark] hover:font-bold"
        size="lg"
        onClick={() => {
          toast({
            title: "Smell ya later!",
            description: "email address is copied to clipboard",
          });
          navigator.clipboard.writeText("zoghmaradem420@gmail.com");
        }}
      >
        Mail Me
      </Button>
      <div className="mt-20 h-10 w-64  flex justify-evenly items-center">
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
      <div className="h-20" />
    </div>
  );
}
