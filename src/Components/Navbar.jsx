import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Portfolio",
    },
    {
      id: 4,
      title: "Experience",
    },
    {
      id: 5,
      title: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 h-16 shadow-md font-serif md:px-20 fixed top-0 left-0 right-0 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img
              src="Image3.jpg"
              className="h-12 mt-2 w-12 rounded-full"
              alt=""
            />
            <h1 className="text-2xl">
              Ravi <span>Shankar</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          <div className="">
            <ul className="hidden md:flex space-x-16">
              {navItems.map((data) => {
                return (
                  <>
                    <li
                      className="hover:scale-110 duration-200 cursor-pointer"
                      key={data.id}
                    >
                      <Link
                      to={data.title}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      >{data.title}</Link>
                    </li>
                  </>
                );
              })}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
            </div>
          </div>
        </div>
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col justify-center items-center h-screen space-y-6">
              {navItems.map(({ id, title }) => {
                return (
                  <>
                    <li
                      className="hover:scale-110 duration-200 cursor-pointer font-serif font-semibold text-2xl"
                      key={id}
                    >
                      <Link
                        onClick={() => setMenu(!menu)}
                        to={title}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active"
                      >
                        {title}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
