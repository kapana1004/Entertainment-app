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
      <div className="">
        {ContentData.map((item, index) => (
          <div className=" overflow-x-auto w-[240px]" key={index}>
            <img className="" src={item.thumbnail.trending?.small} alt="" />
          </div>
        ))}
        {}
      </div>
    </div>
  );
}
