import React from "react";
import Logo from "../components/SVG/Logo";
import Home from "../components/SVG/Home";
import Movies from "../components/SVG/Movies";
import Tvseries from "../components/SVG/Tvseries";
import Bookmark from "../components/SVG/Bookmark";
import Avatar from "../../public/assets/image-avatar.png";
interface MoenuProps {
  handleMovieContent: () => void;
  handleTvseriesContent: () => void;
  handleHome: () => void;
  logoColor: string;
  changeColor: string;
}

export default function Menubar({
  handleMovieContent,
  handleTvseriesContent,
  handleHome,
  changeColor,
  logoColor,
}: MoenuProps) {
  return (
    <div className=" pl-[20px] pr-[20px] w-[375px] h-[56px] bg-[#161D2F] flex flex-row justify-between items-center ">
      {" "}
      <Logo />
      <div className=" flex flex-row w-[133.5px] justify-between cursor-pointer">
        <Home
          handleHome={handleHome}
          logoColor={logoColor}
          changeColor={changeColor}
        />
        <Movies
          handleMovieContent={handleMovieContent}
          logoColor={logoColor}
          changeColor={changeColor}
        />
        <Tvseries
          handleTvseriesContent={handleTvseriesContent}
          logoColor={logoColor}
          changeColor={changeColor}
        />
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
