import React from "react";
import { FaSearch } from "react-icons/fa";
import SideBar from "./sidebar/SideBar";

const SecNav = () => {
  return (
    <div className=" mt-16 z-20 mx-auto fixed right-0 left-0 top-0">
      <nav className=" flex py-4 bg-beentoslightblue lg:px-16 md:px-16 px-7 border-b-bestosblue justify-between items-center">
        <div className=""></div>

        <div className=" flex justify-center items-center">
          <input type="text" className=" outline-none px-2" />
          <div className=" bg-bestosyellow p-1">
            <FaSearch className=" text-bestoswhite" />
          </div>
        </div>
      </nav>
      <SideBar />
    </div>
  );
};

export default SecNav;
