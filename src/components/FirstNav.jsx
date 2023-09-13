import React from "react";
import { useState } from "react";
import { BsBell } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const FirstNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className=" mx-auto">
      <nav className=" flex z-20 lg:justify-between justify-between fixed top-0 left-0 right-0 h-16 items-center lg:px-16 md:px-16 px-7 bg-bestosblue text-bestoswhite ">
        {/* Company Name */}
        <div>
          <p className="lg:text-[24px] md:text-[12px] text-[12px ]font-bold">
            NAME
          </p>
        </div>

        {/* Notification & Profile */}
        <div className=" flex justify-center space-x-10 items-center">
          {isDropdownOpen && (
            <div
              className={`overflow-hidden relative top-40 lg:right-[-320px] right-[-220px] bg-bestosblue lg:w-52 w-24 text-bestoswhite transition-max-height duration-300 ${
                isDropdownOpen ? "max-h-40" : "max-h-0"
              } `}
            >
              {/* Dropdown content */}
              <Link to="/user">
                <button className="block w-full px-4 py-2 text-left p-3">
                  User
                </button>
              </Link>

              <button className="block w-full px-4 py-2 text-left p-3">
                Edit
              </button>
              <button className="block w-full px-4 py-2 text-left p-3">
                Profile
              </button>
              <button className="block text-bestosyellow font-bold w-full px-4 py-2 text-left p-3">
                Sign Out
              </button>
            </div>
          )}
          <div className=" lg:flex md:hidden hidden">
            <BsBell />
          </div>
          <div className=" flex space-x-3 justify-center items-center">
            <img
              className=" w-8 h-8 rounded-3xl"
              src="https://res.cloudinary.com/dybryo15k/image/upload/v1692797963/cld-sample.jpg"
              alt=""
            />

            <div
              className=" users flex justify-center items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <div>Joe Antony</div>
              <IoIosArrowDown
                className={`mt-2 transition-transform transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FirstNav;
