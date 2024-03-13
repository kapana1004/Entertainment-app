import { useState } from "react";

import Logincomponent from "./components/Logincomponent";
import SignupComponent from "./components/Signupcomponent";

function App() {
  const [logOrSign, setLogOrSign] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [savedEmail, setSavedEmail] = useState<string>("");
  const [savedPassword, setSavedPassword] = useState<string>("");
  const [isValid, setValid] = useState<boolean>(true);
  const [isValidPassword, setValidPassword] = useState<boolean>(true);
  localStorage.setItem("mail", email);
  localStorage.setItem("pass", password);

  const handleLoginAndSignout: React.MouseEventHandler<
    HTMLSpanElement
  > = () => {
    setLogOrSign(!logOrSign);
  };
  return (
    <div>
      {logOrSign ? (
        <Logincomponent
          handleLoginAndSignout={handleLoginAndSignout}
          isValid={isValid}
          setValid={setValid}
          isValidPassword={isValidPassword}
          setValidPassword={setValidPassword}
        />
      ) : null}
      {!logOrSign ? (
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
        />
      ) : null}
    </div>
  );
}

export default App;
