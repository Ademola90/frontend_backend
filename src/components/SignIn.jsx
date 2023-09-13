import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className=" flex h-screen justify-center items-center">
      <div className=" flex ">
        {/* Account container */}
        <div className=" w-1/2 bg-bestosblue p-10 grid justify-center">
          <div className="w-[400px] h-auto space-y-5">
            <p className=" text-center text-bestoswhite text-[24px] font-bold">
              {" "}
              SIGN IN
            </p>
            <form
              action=""
              className=" grid justify-center items-center space-y-3"
            >
              <div className="flex justify-center items-center relative right-[-8px] ">
                <FaRegUser className=" relative z-20 text-bestoswhite right-[-5px]" />
                <input
                  className=" bg-gray-300 outline-none px-7 py-3 relative left-[-17px] "
                  placeholder="Name"
                  type="text"
                />
              </div>

              <div className="flex justify-center items-center relative right-[-8px]  ">
                <FaRegEnvelope className=" relative z-20 text-bestoswhite right-[-5px]" />
                <input
                  className="bg-gray-300 outline-none px-7 py-3 relative left-[-17px]"
                  placeholder="Email"
                  type="text"
                />
              </div>

              <div className="flex justify-center items-center relative right-[-8px] ">
                <RiLockPasswordLine className=" relative z-20 text-bestoswhite right-[-5px]" />
                <input
                  className="bg-gray-300 outline-none px-7 py-3 relative left-[-17px]"
                  placeholder="Password"
                  type="text"
                />
              </div>

              <div className="flex items-center justify-center px-2 pt-5 space-x-7">
                <Link to="/mainpage">
                  {" "}
                  <button className=" px-5 py-1  bg-bestoswhite hover:bg-bestosyellow hover:text-bestoswhite transition-transform duration-500 transform hover:scale-105 rounded-3xl font-bold text-bestosblue ">
                    SIGN IN{" "}
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* image container */}
        <div className=" w-1/2 bg-bestosyellow">
          <div
            className="flex
           justify-center items-center h-full"
          >
            <img
              className="w-[200px] h-[300px]"
              src="https://res.cloudinary.com/dybryo15k/image/upload/v1694487307/beentosimg_kgomuj.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
