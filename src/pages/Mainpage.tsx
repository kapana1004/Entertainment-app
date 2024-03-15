import React from "react";
import Menubar from "./Menubar";
import IconSearch from "../../public/assets/icon-search.svg";
export default function Mainpage() {
  return (
    <div className="flex min-w-[100vw] min-h-[100vh] flex-col bg-[#10141E]">
      <Menubar />
      <div className=" flex relative pt-[20px] w-[100%]">
        <input
          className=" bg-inherit text-[16px] w-[257px] h-[24px] text-[#FFFFFF] pl-[40px]"
          type="search"
          placeholder="movies"
        />
        <img
          className=" w-[18px h-[18px] absolute top-[55%] left-[3%] "
          src={IconSearch}
          alt="search"
        />
      </div>
    </div>
  );
}
