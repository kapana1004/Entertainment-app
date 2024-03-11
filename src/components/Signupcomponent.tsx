import React, { useState, ChangeEvent } from "react";
import Logo from "./SVG/Logo";

interface EmailInputProps {
  // Add any other props you might need
}

const SignupComponent: React.FC<EmailInputProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [isValid, setValid] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isValidPassword, setValidPassword] = useState<boolean>(true);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    setEmail(inputValue);

    // Email validation using a simple regex
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValid(emailRegex.test(inputValue));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    setPassword(inputValue);
    setValidPassword(inputValue.length >= 8); // You can adjust the password validation criteria
  };

  const handleRepeatPasswordChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const inputValue: string = e.target.value;
    setRepeatPassword(inputValue);
    setPasswordsMatch(inputValue === password);
  };
  const handleTogglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };
  const handleToggleRepeatPasswordVisibility = (): void => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  return (
    <div className=" min-w-[100vw] min-h-[100vh] bg-[#10141E] flex flex-col items-center">
      {/* <img className=" mt-[40px]" src={Logo} alt="logo" /> */}
      <div className=" mt-[40px]">
        {" "}
        <Logo />
      </div>

      <div className=" mt-[50px] w-[327px] h-[420px] bg-[#161D2F] rounded-[10px]">
        <h1 className=" text-[32px] text-[#FFFFFF] pt-[20px] pl-[20px] mb-[20px]">
          Sign Up
        </h1>

        <input
          placeholder="Email address"
          value={email}
          onChange={handleEmailChange}
          className={` ${
            isValid ? "border-inherit" : "border-red-500"
          } w-[279px] h-[37px] ml-[20px] text-[#FFFFFF] bg-[#161D2F] pl-[24px] pb-[30px] pt-[30px] border-b border-b-[#5A698F]`}
        />
        {!isValid && (
          <p className={`text-[red]`}>Please enter a valid email address</p>
        )}
        <div className=" relative">
          <input
            className={` ${
              isValidPassword ? "border-inherit" : "border-red-500"
            } w-[279px] h-[37px] ml-[20px] text-[#FFFFFF] bg-[#161D2F] pl-[24px] pb-[30px] pt-[30px] border-b border-b-[#5A698F]`}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
          />
          {!isValidPassword && (
            <p className={`text-[red]`}>
              Password must be at least 8 characters
            </p>
          )}

          <span
            onClick={handleTogglePasswordVisibility}
            className=" cursor-pointer text-[10px] text-red-800 h-[15px] absolute top-[40%] right-[15%] w-[15px]"
          >
            {" "}
            {showPassword ? "hide" : "show"}
          </span>
        </div>
        <div className=" relative">
          <input
            className={` ${
              passwordsMatch ? "border-inherit" : "border-red-500"
            } w-[279px] h-[37px] ml-[20px] text-[#FFFFFF] bg-[#161D2F] pl-[24px] pb-[30px] pt-[30px] border-b border-b-[#5A698F]`}
            placeholder="Repeat password"
            type={showRepeatPassword ? "text" : "password"}
            onChange={handleRepeatPasswordChange}
            value={repeatPassword}
          />
          {!passwordsMatch && (
            <p className={`text-[red]`}>Passwords do not match</p>
          )}
          <span
            onClick={handleToggleRepeatPasswordVisibility}
            className=" cursor-pointer text-[10px] text-red-800 h-[15px] absolute top-[40%] right-[15%] w-[15px]"
          >
            {" "}
            {showRepeatPassword ? "hide" : "show"}
          </span>
        </div>

        <button className=" ml-[20px] mt-[30px] w-[279px] h-[48px] rounded-[10px] bg-[#FC4747] text-[15px] text-[#FFFFFF]">
          {" "}
          Create an account
        </button>

        <div className=" flex flex-row  pl-[50px] mt-[20px]">
          {" "}
          <span className=" text-[#FFFFFF] text-[12px]">
            Already have an account?
          </span>{" "}
          <span className=" ml-[10px] text-[#FC4747] text-[12px]">Login</span>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
