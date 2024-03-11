import React from "react";
import Logo from "./SVG/Logo";

export default function Logincomponent() {
  return (
    <div className=" min-w-[100vw] min-h-[100vh] bg-[#10141E] flex flex-col items-center">
      {/* <img className=" mt-[40px]" src={Logo} alt="logo" /> */}
      <div className=" mt-[40px]">
        {" "}
        <Logo />
      </div>

      <div className=" mt-[50px] w-[327px] h-[365px] bg-[#161D2F] rounded-[10px]">
        <h1 className=" text-[32px] text-[#FFFFFF] pt-[20px] pl-[20px] mb-[20px]">
          Login
        </h1>
        <input
          className=" w-[279px] h-[37px] ml-[20px] text-[#FFFFFF] bg-[#161D2F] pl-[24px] pb-[35px] pt-[35px] border-b border-b-[#5A698F]"
          placeholder="Email address"
          type="text"
        />
        <input
          className=" w-[279px] h-[37px] ml-[20px] text-[#FFFFFF] bg-[#161D2F] pl-[24px] pb-[35px] pt-[35px] border-b border-b-[#5A698F]"
          placeholder="Password"
          type="text"
        />

        <button className=" ml-[20px] mt-[30px] w-[279px] h-[48px] rounded-[10px] bg-[#FC4747] text-[15px] text-[#FFFFFF]">
          {" "}
          Login to your account
        </button>

        <div className=" flex flex-row  pl-[50px] mt-[20px]">
          {" "}
          <span className=" text-[#FFFFFF] text-[12px]">
            Don’t have an account?
          </span>{" "}
          <span className=" ml-[10px] text-[#FC4747] text-[12px]">Sign Up</span>
        </div>
      </div>
    </div>
  );
}
