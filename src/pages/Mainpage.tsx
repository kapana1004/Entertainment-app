import React from "react";
import Menubar from "./Menubar";
import IconSearch from "../../public/assets/icon-search.svg";
import ContentData from "../data.json";

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
        <div className=" flex overflow-scroll ">
          {ContentData.map((item) =>
            item.thumbnail.trending ? (
              <div className=" flex relative w-[240px] h-[140px]">
                <img
                  className=" w-[240px] h-[140px] ml-[10px] rounded-[10px]"
                  src={item.thumbnail.trending?.small}
                  alt=""
                />
                <span className=" absolute top-[70%] left-[20%] text-white">
                  {" "}
                  {item.year}
                </span>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
