import { useState } from "react";

import Logincomponent from "./components/Logincomponent";
import SignupComponent from "./components/Signupcomponent";

function App() {
  return (
    <div>
      <Logincomponent />
      <SignupComponent />
    </div>
  );
}

export default App;
