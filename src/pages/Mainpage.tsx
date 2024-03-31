import React from "react";
import Menubar from "./Menubar";
import IconSearch from "../../public/assets/icon-search.svg";
import ContentData from "../data.json";
import TrendingSection from "./TrendingSection";
import RecomendedPage from "./RecomendedPage";
import { useState } from "react";
import TvseriesContent from "./TvseriesContent";
import MoviesContent from "./MoviesContent";
import BookmarkedContent from "./BookmarkedContent";

export default function Mainpage() {
  const [movie, setmovie] = useState<boolean>(false);
  const [trending, setTrending] = useState<boolean>(true);
  const [recomended, setRecomended] = useState<boolean>(true);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [Tvseries, setTvseries] = useState<boolean>(false);
  const [homelogoColor, setHomeLogoColor] = useState<string>("#FFFFFF");
  const [movieLogoColor, setMovieLogoColor] = useState<string>("");
  const [tvLogoColor, setTvLogoColor] = useState<string>("");
  const [changeHomeColor, setChangeHomeColor] = useState<boolean>(true);
  const [changeMovieColor, setChangeMovieColor] = useState<boolean>(false);
  const [changeTvColor, setChangeTvColor] = useState<boolean>(false);
  const [changeBookmarkColor, setChanegBookmarkColor] = useState<string>("");
  const [bookmarkColor, setBookmarkColor] = useState<boolean>(false);
  // const [bookmarkedIcon, setBookmarkedIcon] = useState<boolean>(false);

  const handleBookmark = () => {
    setBookmarkColor(true);
    setChanegBookmarkColor("#FFFFFF");
    setRecomended(false);
    setTrending(false);
    setTvseries(false);
    setChangeHomeColor(false);
    setChangeTvColor(false);
    setmovie(false);
    setBookmarked(true);
  };

  const handleMovieContent = () => {
    setmovie(true);
    setRecomended(false);
    setTrending(false);
    setTvseries(false);
    setChangeMovieColor(true);
    setMovieLogoColor("#FFFFFF");
    setChangeHomeColor(false);
    setChangeTvColor(false);
    setBookmarkColor(false);
    setBookmarked(false);
  };

  const handleTvseriesContent = () => {
    setTvseries(true);
    setmovie(false);
    setRecomended(false);
    setTrending(false);
    setTvLogoColor("#FFFFFF");
    setChangeTvColor(true);
    setChangeHomeColor(false);
    setChangeMovieColor(false);
    setBookmarkColor(false);
    setBookmarked(false);
  };
  const handleHome = () => {
    setTvseries(false);
    setmovie(false);
    setRecomended(true);
    setTrending(true);
    setHomeLogoColor("#FFFFFF");
    setChangeHomeColor(true);
    setChangeMovieColor(false);
    setChangeTvColor(false);
    setBookmarkColor(false);
    setBookmarked(false);
  };

  return (
    <div className="flex min-w-[100vw] min-h-[100vh] flex-col bg-[#10141E] items-center ">
      <Menubar
        handleMovieContent={handleMovieContent}
        handleTvseriesContent={handleTvseriesContent}
        handleHome={handleHome}
        handleBookmark={handleBookmark}
        homelogoColor={homelogoColor}
        changeHomeColor={changeHomeColor}
        tvLogoColor={tvLogoColor}
        movieLogoColor={movieLogoColor}
        changeMovieColor={changeMovieColor}
        changeTvColor={changeTvColor}
        bookmarkColor={bookmarkColor}
        changeBookmarkColor={changeBookmarkColor}
      />
      <div className=" flex relative pt-[20px] w-[375px] ">
        <input
          className=" bg-inherit text-[16px] w-[257px] h-[24px] text-[#FFFFFF] pl-[40px] max-w-[257px] "
          type="search"
          placeholder="movies"
        />
        <img
          className=" w-[18px h-[18px] absolute top-[55%] left-[3%] "
          src={IconSearch}
          alt="search"
        />
      </div>

      {trending ? <TrendingSection /> : null}

      {recomended ? <RecomendedPage /> : null}
      {movie ? <MoviesContent /> : null}
      {Tvseries ? <TvseriesContent /> : null}
      {bookmarked ? <BookmarkedContent /> : null}
    </div>
  );
}
