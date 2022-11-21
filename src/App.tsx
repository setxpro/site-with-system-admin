import RoutesApp from "./Routes";
import Screens from "./Screens";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [getI, setGetI] = useState(false);
  return (
    <div>
      <RoutesApp />
      {getI && <Screens />}
      <ToastContainer/>
    </div>
  );
}

export default App;
