import React from "react";
import Logo from "../components/SVG/Logo";
import Home from "../components/SVG/Home";
import Movies from "../components/SVG/Movies";
import Tvseries from "../components/SVG/Tvseries";
import Bookmark from "../components/SVG/Bookmark";
import Avatar from "../../public/assets/image-avatar.png";
interface MovieProps {
  handleMovieContent: () => void;
  handleTvseriesContent: () => void;
}

export default function Menubar({
  handleMovieContent,
  handleTvseriesContent,
}: MovieProps) {
  return (
    <div className=" pl-[20px] pr-[20px] w-[375px] h-[56px] bg-[#161D2F] flex flex-row justify-between items-center ">
      {" "}
      <Logo />
      <div className=" flex flex-row w-[133.5px] justify-between cursor-pointer">
        <Home />
        <Movies handleMovieContent={handleMovieContent} />
        <Tvseries handleTvseriesContent={handleTvseriesContent} />
        <Bookmark />
      </div>
      <img
        className=" w-[24px] h-[24px] rounded-[50px] border border-[#FFFFFF]"
        src={Avatar}
        alt="user-photo"
      />
    </div>
  );
}
