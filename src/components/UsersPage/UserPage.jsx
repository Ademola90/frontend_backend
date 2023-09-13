import { useState } from "react";
import React from "react";
import FirstNav from "../FirstNav";
import SecNav from "../SecNav";

const UserPage = () => {
  // Sample array of friends with their information
  const friends = [
    {
      name: "Joe Samnel",
      profilePicture:
        "https://res.cloudinary.com/dybryo15k/image/upload/v1692797963/cld-sample.jpg",
    },
    {
      name: "Grace Peace",
      profilePicture:
        "https://res.cloudinary.com/dybryo15k/image/upload/v1692797963/cld-sample.jpg",
    },
    {
      name: "Grace Peace",
      profilePicture:
        "https://res.cloudinary.com/dybryo15k/image/upload/v1692797963/cld-sample.jpg",
    },
    {
      name: "Grace Peace",
      profilePicture:
        "https://res.cloudinary.com/dybryo15k/image/upload/v1692797963/cld-sample.jpg",
    },
    {
      name: "Grace Peace",
      profilePicture:
        "https://res.cloudinary.com/dybryo15k/image/upload/v1692797963/cld-sample.jpg",
    },
    {
      name: "Grace Peace",
      profilePicture:
        "https://res.cloudinary.com/dybryo15k/image/upload/v1692797963/cld-sample.jpg",
    },
    // Add more friends as needed
  ];

  // State to track whether to display the friend list or not
  const [showFriendList, setShowFriendList] = useState(false);

  // Function to toggle the friend list visibility
  const toggleFriendList = () => {
    setShowFriendList(!showFriendList);
  };

  return (
    <div>
      <FirstNav />
      <SecNav />

      <div className="bg-beentoslightblue text-bestoswhite h-full mt-[122px] py-10 lg:px-16 md:px-16 px-7">
        <div className="">
          <div className="font-bold">USER</div>

          <div className="mt-10 space-y-5">
            <button
              className=" bg-bestosblue hover:bg-bestosyellow text-white hover:text-bestosblue font-semibold py-2 px-4 shadow-md transition duration-300 ease-in-out"
              onClick={toggleFriendList}
            >
              Friends
            </button>
            {/* Display the friend list only when showFriendList is true */}
            {showFriendList && (
              <div className="friends">
                {/* Map through the friends array and render each friend */}
                {friends.map((friend, index) => (
                  <div key={index} className="friend-item my-5 space-y-4">
                    <div className=" flex items-center space-x-5">
                      <img
                        src={friend.profilePicture}
                        alt={friend.name}
                        className="profile-picture w-10 h-10 rounded-full"
                      />
                      <div className="friend-name font-bold text-[24px]">
                        {friend.name}
                      </div>
                    </div>

                    {/* friends Button */}
                    <div className=" space-x-3 z-0">
                      <button className=" bg-bestosblue z-0 rounded-md text-white font-bold w-28 hover:bg-bestosyellow hover:text-bestosblue  transition-transform duration-500 transform hover:scale-105 px-3 py-1">
                        Add Friend
                      </button>
                      <button className=" bg-bestoswhite z-0 rounded-md text-bestosblue w-28 font-bold transition-transform duration-500 transform hover:scale-105 px-3 py-1">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
