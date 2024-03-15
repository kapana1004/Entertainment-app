import { ChangeEvent, MouseEventHandler, useState } from "react";
import Logo from "./SVG/Logo";
import { Link } from "react-router-dom";

interface EmailInputProps {
  handleLoginAndSignout: MouseEventHandler<HTMLSpanElement>;
  isValid: boolean;
  setValid: (isValid: boolean) => void;
  isValidPassword: boolean;
  setValidPassword: (validPassword: boolean) => void;
}
const Logincomponent: React.FC<EmailInputProps> = ({
  // handleLoginAndSignout,
  isValid,
  setValid,
  isValidPassword,
  setValidPassword,
}) => {
  const [showLoginPassword, setShowLoginPassword] = useState<boolean>(false);
  const [loginMail, setLoginMail] = useState<string>("");
  const [loginPass, setLoginPass] = useState<string>("");
  const [login, setLogin] = useState<boolean>(false);

  const handleToggleLoginPasswordVisibility = (): void => {
    setShowLoginPassword(!showLoginPassword);
  };

  const handleEmailLogin = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputLoginMailValue: string = e.target.value;
    setLoginMail(inputLoginMailValue);
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValid(emailRegex.test(inputLoginMailValue));
  };

  const handlePasswordLogin = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputLoginPasswordValue: string = e.target.value;
    setLoginPass(inputLoginPasswordValue);
    setValidPassword(inputLoginPasswordValue.length >= 6);
  };

  const getMail = localStorage.getItem("mail");
  const getPass = localStorage.getItem("pass");

  const handleLogin = (): void => {
    if (loginMail === getMail && loginPass === getPass) {
      console.log("go to main page");
      setLogin(true);

      console.log(loginMail, getMail, loginPass, getPass);
    } else {
      console.log("Credential Failed");
    }
    console.log(login);
  };

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
          value={loginMail}
          onChange={handleEmailLogin}
        />
        {!isValid && (
          <p className={`text-[red] text-[10px] ml-[20px]`}>
            Please enter a valid email address
          </p>
        )}

        <div className=" relative">
          <input
            className=" w-[279px] h-[37px] ml-[20px] text-[#FFFFFF] bg-[#161D2F] pl-[24px] pb-[35px] pt-[35px] border-b border-b-[#5A698F]"
            placeholder="Password"
            type={showLoginPassword ? "text" : "password"}
            value={loginPass}
            onChange={handlePasswordLogin}
          />
          {!isValidPassword && (
            <p className={`text-[red] text-[10px] ml-[20px]`}>
              Password must be at least 8 characters
            </p>
          )}
          <span
            onClick={handleToggleLoginPasswordVisibility}
            className=" cursor-pointer text-[10px] text-red-800 h-[15px] absolute top-[40%] right-[15%] w-[15px]"
          >
            {" "}
            {showLoginPassword ? "hide" : "show"}
          </span>
        </div>
        <Link to="/mainpage">
          <button
            onClick={handleLogin}
            className=" ml-[20px] mt-[30px] w-[279px] h-[48px] rounded-[10px] bg-[#FC4747] text-[15px] text-[#FFFFFF]"
          >
            {" "}
            Login to your account
          </button>
        </Link>
        <div className=" flex flex-row  pl-[50px] mt-[20px]">
          {" "}
          <span className=" text-[#FFFFFF] text-[12px]">
            Don’t have an account?
          </span>{" "}
          <Link to="/signup">
            <span
              // onClick={handleLoginAndSignout}
              className=" cursor-pointer ml-[10px] text-[#FC4747] text-[12px]"
            >
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logincomponent;
