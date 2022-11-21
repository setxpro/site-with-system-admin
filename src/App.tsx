import RoutesApp from "./Routes";
import Screens from "./Screens";
import { useState } from "react";

function App() {
  const [getI, setGetI] = useState(false);
  return (
    <div>
      <RoutesApp />
      {getI && <Screens />}
    </div>
  );
}

export default App;
