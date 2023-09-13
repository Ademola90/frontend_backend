import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { BsBell } from "react-icons/bs";
import { PiDropboxLogoThin } from "react-icons/pi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <GoHomeFill />,
    cName: "nav-text",
  },
  {
    title: "Message",
    path: "/",
    icon: <BsEnvelope />,
    cName: "nav-text",
  },
  {
    title: "User",
    path: "/user",
    icon: <HiUserGroup />,
    cName: "nav-text",
  },
  {
    title: "Notification",
    path: "/notification",
    icon: <BsBell />,
    cName: "nav-text",
  },
  {
    title: "Add Friends",
    path: "/addfriends",
    icon: <PiDropboxLogoThin />,
    cName: "nav-text",
  },
];
