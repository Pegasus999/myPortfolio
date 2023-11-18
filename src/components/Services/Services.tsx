import React from "react";
import Wallpaper from "../../assets/images/services.png";
export default function Services() {
  return (
    <div className="px-20 py-10 w-full flex justify-center items-center flex-col bg-[#2B2140]">
      <h1 className="font-bold text-5xl text-[--white]">Services</h1>
      <div className="mt-10 h-[600px] w-[80%]  flex justify-around items-center gap-5">
        <div className="h-[70%] w-1/3 bg-[--purpleLight] flex shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] items-center rounded-2xl flex-col pt-5">
          <div
            className="h-20 w-20 bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png')",
              backgroundPosition: "center",
            }}
          ></div>
          <h4 className="font-bold text-2xl">Web Application Development</h4>
          <p className=" text-center p-4 text-[--white]">
            I specialize in crafting seamless and responsive user experiences
            for web applications. With a keen eye for design and a passion for
            clean, efficient code, I bring your ideas to life by creating
            visually stunning and user-friendly interfaces for the web. Whether
            it's building sleek and responsive websites that resonate with your
            audience, optimizing user interaction, or ensuring cross-browser
            compatibility, I am dedicated to delivering high-quality front-end
            solutions tailored to your unique web development needs.
          </p>
        </div>
        <div className="h-[70%] w-1/3 bg-[--purpleLight] flex shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] items-center rounded-2xl flex-col pt-5">
          <div
            className="h-20 w-20 bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-app-development-responsive-web-design-justicon-lineal-color-justicon.png')",
              backgroundPosition: "center",
            }}
          ></div>
          <h4 className=" font-bold text-2xl">
            Mobile Application Development
          </h4>
          <p className=" text-center p-4 text-[--white]">
            Specializing in creating captivating and user-friendly experiences
            for mobile platforms, I bring innovation to the forefront of your
            project. Through expert front-end development, I design and
            implement sleek interfaces, ensuring your mobile application stands
            out with intuitive navigation and seamless functionality. Whether
            it's crafting visually stunning user interfaces, optimizing for
            diverse screen sizes, or ensuring a smooth user journey, I am
            committed to delivering top-notch front-end solutions customized for
            your unique mobile development goals.
          </p>
        </div>
        <div className="h-[70%] w-1/3 bg-[--purpleLight] flex shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] items-center rounded-2xl flex-col pt-5">
          <div
            className="h-20 w-20 bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png')",
              backgroundPosition: "center",
            }}
          ></div>
          <h4 className="font-bold text-2xl">Back End Development</h4>
          <p className="text-center p-4 text-[--white]">
            I specialize in creating the sturdy foundation that powers your
            website, making sure everything runs smoothly and securely. Whether
            it's organizing and managing your data or ensuring your website
            communicates seamlessly, I've got you covered. Let's work together
            to build a reliable and efficient backend that brings your website
            to life, making it not just functional, but truly exceptional!
          </p>
        </div>
      </div>
    </div>
  );
}
