import React from "react";
import Menubar from "./Menubar";
import IconSearch from "../../public/assets/icon-search.svg";
import ContentData from "../data.json";
import Trendingtvserie from "../components/SVG/Trendingtvserie";
import Trendingmovielogo from "../components/SVG/Trendingmovielogo";
import BookmarkedEmpty from "../components/SVG/BookmarkedEmpty";

console.log(ContentData);
export default function Mainpage() {
  return (
    <div className="flex min-w-[100vw] min-h-[100vh] flex-col bg-[#10141E] items-center ">
      <Menubar />
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

      <div className=" flex flex-col mt-[20px]">
        <span className=" text-white mb-[10px] ml-[20px]">Trending</span>
        <div className=" flex overflow-x-scroll w-[400px]">
          {ContentData.map((item, index) =>
            item.thumbnail.trending ? (
              <div className=" flex relative min-w-[240px] h-[140px] ml-[10px]">
                <div className=" rounded-full bg-[#10141E] opacity-50 flex justify-center items-center w-[32px] h-[32px] absolute top-[8%] right-[0%]">
                  {" "}
                  <BookmarkedEmpty />{" "}
                </div>
                <img
                  className=" min-w-[240px] h-[140px] ml-[10px] rounded-[10px]"
                  src={item.thumbnail.trending?.small}
                  alt=""
                />
                <div className=" absolute top-[55%] left-[10%] flex flex-row w-[150px] h-[38px] items-center justify-between">
                  <span className=" text-[12px] text-white">{item.year}</span>
                  <div className=" w-[3px] h-[3px] rounded-full bg-slate-300"></div>
                  {item.category === "Movie" ? (
                    <Trendingmovielogo />
                  ) : (
                    <Trendingtvserie />
                  )}{" "}
                  <span className=" text-[12px] text-white">
                    {item.category}
                  </span>{" "}
                  <div className=" w-[3px] h-[3px] rounded-full bg-slate-300"></div>
                  <span className=" text-[12px] text-slate-300">
                    {item.rating}
                  </span>
                </div>
                <span className=" text-white absolute top-[75%] left-[10%] text-[15px]">
                  {item.title}
                </span>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
