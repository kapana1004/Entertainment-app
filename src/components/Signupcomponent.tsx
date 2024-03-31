import React, { useState, ChangeEvent, MouseEventHandler } from "react";
import Logo from "./SVG/Logo";
import { Link } from "react-router-dom";

interface EmailInputProps {
  handleLoginAndSignout: MouseEventHandler<HTMLSpanElement>;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  repeatPassword: string;
  setRepeatPassword: (repeatPassword: string) => void;
  savedEmail: string;
  setSavedEmail: (savedEmail: string) => void;
  savedPassword: string;
  setSavedPassword: (savedPassword: string) => void;
  isValid: boolean;
  setValid: (isValid: boolean) => void;
  isValidPassword: boolean;
  setValidPassword: (validPassword: boolean) => void;
  signed: boolean;
  setSigned: (signed: boolean) => void;
}

const SignupComponent: React.FC<EmailInputProps> = ({
  handleLoginAndSignout,
  email,
  setEmail,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,
  isValid,
  setValid,
  isValidPassword,
  setValidPassword,
  signed,
  setSigned,
}) => {
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false);
  // const [signed, setSigned] = useState<boolean>(false);
  const hideSign = () => {
    setTimeout(() => {
      setSigned(false);
    }, 2000);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputMailValue: string = e.target.value;
    setEmail(inputMailValue);
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValid(emailRegex.test(inputMailValue));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputPasswordValue: string = e.target.value;
    setPassword(inputPasswordValue);
    setValidPassword(inputPasswordValue.length >= 6);
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

  const handleSignup = (): void => {
    localStorage.setItem("mail", email);
    localStorage.setItem("pass", password);
    if (isValid && passwordsMatch && email.length > 1 && password.length >= 6) {
      setSigned(true);
    }
    // hideSign();
  };

  return (
    <div className=" min-w-[100vw] min-h-[100vh] bg-[#10141E] flex flex-col items-center">
      <div className=" mt-[40px]">
        {" "}
        <Logo />
      </div>

      <div className=" mt-[50px] w-[327px] h-[420px] bg-[#161D2F] rounded-[10px]">
        <div className=" flex flex-row justify-between items-center">
          <h1 className=" text-[32px] text-[#FFFFFF] pt-[20px] pl-[20px] mb-[20px]">
            Sign Up
          </h1>
          {signed ? (
            <span className=" text-lime-700 text-[8px] pr-[20px]">
              {" "}
              Account created{" "}
            </span>
          ) : null}
        </div>

        <input
          placeholder="Email address"
          value={email}
          onChange={handleEmailChange}
          className={` ${
            isValid ? "border-inherit" : "border-red-500"
          } w-[279px] h-[37px] ml-[20px] text-[#FFFFFF] bg-[#161D2F] pl-[24px] pb-[30px] pt-[30px] border-b border-b-[#5A698F]`}
        />
        {!isValid && (
          <p className={`text-[red] text-[10px] ml-[20px]`}>
            Please enter a valid email address
          </p>
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
            <p className={`text-[red] text-[10px] ml-[20px]`}>
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
            <p className={`text-[red] text-[10px] ml-[20px]`}>
              Passwords do not match
            </p>
          )}
          <span
            onClick={handleToggleRepeatPasswordVisibility}
            className=" cursor-pointer text-[10px] text-red-800 h-[15px] absolute top-[40%] right-[15%] w-[15px]"
          >
            {" "}
            {showRepeatPassword ? "hide" : "show"}
          </span>
        </div>

        <button
          onClick={handleSignup}
          className=" ml-[20px] mt-[30px] w-[279px] h-[48px] rounded-[10px] bg-[#FC4747] text-[15px] text-[#FFFFFF]"
        >
          {" "}
          Create an account
        </button>

        <div className=" flex flex-row  pl-[50px] mt-[20px]">
          {" "}
          <span className=" text-[#FFFFFF] text-[12px]">
            Already have an account?
          </span>{" "}
          <Link to="/login">
            <span
              // onClick={handleLoginAndSignout}
              className=" cursor-pointer ml-[10px] text-[#FC4747] text-[12px]"
            >
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
