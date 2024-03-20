import React from "react";
import Menubar from "./Menubar";
import IconSearch from "../../public/assets/icon-search.svg";
import ContentData from "../data.json";
import TrendingSection from "./TrendingSection";
import RecomendedPage from "./RecomendedPage";
import { useState } from "react";
import TvseriesContent from "./TvseriesContent";
import MoviesContent from "./MoviesContent";

console.log(ContentData);
export default function Mainpage() {
  const [movie, setmovie] = useState<boolean>(false);
  const [trending, setTrending] = useState<boolean>(true);
  const [recomended, setRecomended] = useState<boolean>(true);
  const [Tvseries, setTvseries] = useState<boolean>(false);

  const handleMovieContent = () => {
    setmovie(true);
    setRecomended(false);
    setTrending(false);
    setTvseries(false);
  };

  const handleTvseriesContent = () => {
    setTvseries(true);
    setmovie(false);
    setRecomended(false);
    setTrending(false);
  };
  const handleHome = () => {
    setTvseries(false);
    setmovie(false);
    setRecomended(true);
    setTrending(true);
  };

  console.log(movie);
  return (
    <div className="flex min-w-[100vw] min-h-[100vh] flex-col bg-[#10141E] items-center ">
      <Menubar
        handleMovieContent={handleMovieContent}
        handleTvseriesContent={handleTvseriesContent}
        handleHome={handleHome}
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
    </div>
  );
}
