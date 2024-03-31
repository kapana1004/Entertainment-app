import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Logincomponent from "./components/Logincomponent";
import SignupComponent from "./components/Signupcomponent";
import Mainpage from "./pages/Mainpage";

function App() {
  const [logOrSign, setLogOrSign] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [savedEmail, setSavedEmail] = useState<string>("");
  const [savedPassword, setSavedPassword] = useState<string>("");
  const [isValid, setValid] = useState<boolean>(true);
  const [isValidPassword, setValidPassword] = useState<boolean>(true);
  const [signed, setSigned] = useState<boolean>(false);
  localStorage.setItem("mail", email);
  localStorage.setItem("pass", password);

  const handleLoginAndSignout: React.MouseEventHandler<
    HTMLSpanElement
  > = () => {
    setLogOrSign(!logOrSign);
  };
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route
        path="/login"
        element={
          <Logincomponent
            handleLoginAndSignout={handleLoginAndSignout}
            isValid={isValid}
            setValid={setValid}
            isValidPassword={isValidPassword}
            setValidPassword={setValidPassword}
            signed={signed}
          />
        }
      />
      <Route
        path="/signup"
        element={
          <SignupComponent
            handleLoginAndSignout={handleLoginAndSignout}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            repeatPassword={repeatPassword}
            setRepeatPassword={setRepeatPassword}
            savedEmail={savedEmail}
            setSavedEmail={setSavedEmail}
            savedPassword={savedPassword}
            setSavedPassword={setSavedPassword}
            isValid={isValid}
            setValid={setValid}
            isValidPassword={isValidPassword}
            setValidPassword={setValidPassword}
            signed={signed}
            setSigned={setSigned}
          />
        }
      />

      <Route path="/mainpage" element={<Mainpage />} />
    </Routes>
  );
}

export default App;
