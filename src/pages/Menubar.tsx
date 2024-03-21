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
  handleBookmark: () => void;
  homelogoColor: string;
  changeHomeColor: boolean;
  movieLogoColor: string;
  tvLogoColor: string;
  changeMovieColor: boolean;
  changeTvColor: boolean;
  bookmarkColor: boolean;
  changeBookmarkColor: boolean;
}

export default function Menubar({
  handleMovieContent,
  handleTvseriesContent,
  handleHome,
  handleBookmark,
  changeHomeColor,
  homelogoColor,
  movieLogoColor,
  tvLogoColor,
  changeMovieColor,
  changeTvColor,
  bookmarkColor,
  changeBookmarkColor,
}: MoenuProps) {
  return (
    <div className=" pl-[20px] pr-[20px] w-[375px] h-[56px] bg-[#161D2F] flex flex-row justify-between items-center ">
      {" "}
      <Logo />
      <div className=" flex flex-row w-[133.5px] justify-between cursor-pointer">
        <Home
          handleHome={handleHome}
          homelogoColor={homelogoColor}
          changeHomeColor={changeHomeColor}
        />
        <Movies
          handleMovieContent={handleMovieContent}
          movieLogoColor={movieLogoColor}
          changeMovieColor={changeMovieColor}
        />
        <Tvseries
          handleTvseriesContent={handleTvseriesContent}
          tvLogoColor={tvLogoColor}
          changeTvColor={changeTvColor}
        />
        <Bookmark
          bookmarkColor={bookmarkColor}
          changeBookmarkColor={changeBookmarkColor}
          handleBookmark={handleBookmark}
        />
      </div>
      <img
        className=" w-[24px] h-[24px] rounded-[50px] border border-[#FFFFFF]"
        src={Avatar}
        alt="user-photo"
      />
    </div>
  );
}
