import React from "react";
import Trendingmovielogo from "../components/SVG/Trendingmovielogo";
import Trendingtvserie from "../components/SVG/Trendingtvserie";
import BookmarkedEmpty from "../components/SVG/BookmarkedEmpty";
import ContentData from "../data.json";

export default function RecomendedPage() {
  return (
    <div className=" w-[375px]">
      <h1 className=" ml-[20px] mt-[30px] mb-[30px] text-[#ffffff] text-[20px] ">
        Recommended for you
      </h1>

      <div className=" w-[343px] grid grid-cols-2 ml-[20px] overflow-y-auto max-h-[400px] ">
        {ContentData.map((item, index) =>
          item.thumbnail.regular ? (
            <div key={index} className=" w-[164px] pb-[20px] relative">
              <div className=" rounded-full bg-[#10141E] opacity-50 flex justify-center items-center w-[32px] h-[32px] absolute top-[5%] right-[3%]">
                {" "}
                <BookmarkedEmpty />
              </div>
              <img
                className=" w-[164px] rounded-[10px]"
                src={item.thumbnail.regular.small}
                alt="thumbnail"
              />
              <div className="  flex flex-row w-[120px] h-[36px] items-center justify-between">
                <span className=" text-[11px] text-white">{item.year}</span>
                <div className=" w-[3px] h-[3px] rounded-full bg-slate-300"></div>
                {item.category === "Movie" ? (
                  <Trendingmovielogo />
                ) : (
                  <Trendingtvserie />
                )}{" "}
                <span className=" text-[11px] text-white">{item.category}</span>{" "}
                <div className=" w-[3px] h-[3px] rounded-full bg-slate-300"></div>
                <span className=" text-[11px] text-slate-300">
                  {item.rating}
                </span>
              </div>
              <span className=" text-white text-[14px]">{item.title}</span>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
