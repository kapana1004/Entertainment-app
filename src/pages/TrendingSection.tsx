import React from "react";
import Trendingtvserie from "../components/SVG/Trendingtvserie";
import Trendingmovielogo from "../components/SVG/Trendingmovielogo";
import BookmarkedEmpty from "../components/SVG/BookmarkedEmpty";
import ContentData from "../data.json";

export default function TrendingSection() {
  return (
    <div className=" flex flex-col mt-[20px]">
      <span className=" text-white mb-[10px] ml-[20px]">Trending</span>
      <div className=" flex overflow-x-scroll w-[375px]">
        {ContentData.map((item, index) =>
          item.thumbnail.trending ? (
            <div
              key={index}
              className=" flex relative min-w-[240px] h-[140px] ml-[10px]"
            >
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
                <span className=" text-[12px] text-white">{item.category}</span>{" "}
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
  );
}
