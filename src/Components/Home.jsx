import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaNodeJs,
  FaTelegram,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiExpress, SiMongodb, SiReact } from "react-icons/si";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello I am</h1>
              <ReactTyped
                className="font-bold text-orange-600"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-[16px] text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              veritatis dolorem, in unde consequuntur at exercitationem,
              repudiandae itaque aliquid iste nemo non magnam! Perferendis sed
              necessitatibus, illo molestiae laborum magni Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Deleniti nulla molestiae, fuga
              in, nam ratione rerum sint non voluptas.
            </p>
            <br />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold font-serif text-center">
                  Available On
                </h1>
                <div className="flex space-x-5">
                  <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebookSquare className="text-4xl cursor-pointer" />
                  </a>
                  <a href="https://in.linkedin.com/" target="_blank">
                    <FaLinkedin className="text-4xl cursor-pointer" />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank">
                    <IoLogoYoutube className="text-4xl cursor-pointer" />
                  </a>
                  <a href="https://web.telegram.org/" target="_blank">
                    <FaTelegram className="text-4xl cursor-pointer" />
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-serif font-semibold">
                  Currently Working On
                </h1>
                <div className="flex space-x-5 pl-12 md:pl-6">
                  <SiMongodb className="text-2xl md:text-4xl hover:scale-110 duration-200 cursor-pointer" />
                  <SiExpress className="text-2xl md:text-4xl cursor-pointer hover:scale-110 duration-200" />
                  <SiReact className="text-2xl md:text-4xl cursor-pointer hover:scale-110 duration-200" />
                  <FaNodeJs className="text-2xl md:text-4xl cursor-pointer hover:scale-110 duration-200" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src="Image3.jpg"
              alt=""
              className="rounded-full md:w-[450px] md:h-[450px]"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
