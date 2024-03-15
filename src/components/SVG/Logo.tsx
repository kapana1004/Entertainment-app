import React from "react";
import { useLocation } from "react-router-dom";
const Logo = () => {
  const location = useLocation();

  let width = "33";
  let height = "27";
  if (location.pathname === "/mainpage") {
    width = "25";
    height = "20";
  }
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path
        d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
        fill="#FC4747"
      />
    </svg>
  );
};

export default Logo;
