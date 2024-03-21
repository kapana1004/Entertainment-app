import React from "react";
import { useState } from "react";

interface Homeprops {
  handleHome: () => void;
  homelogoColor: string;
  changeHomeColor: boolean;
}

export default function Home({
  handleHome,
  homelogoColor,
  changeHomeColor,
}: Homeprops) {
  // const handleColorHome = () => {
  //   setHomeColor("#FFFFFF");
  //   setChangeColor(true);
  // };
  return (
    <svg
      className=" cursor-pointer"
      onClick={handleHome}
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className=" hover:fill-white"
        d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
        fill={changeHomeColor ? homelogoColor : "#5A698F"}
      />
    </svg>
  );
}
