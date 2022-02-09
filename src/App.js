import logo from "./logo.svg";
import "./App.css";

import Grid from "./components/Grid/Grid";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState([0, 0]);
  const [side, setSide] = useState(0);
  //-> \/ <- /\
  const handleMoveForward = () => {
    if (side === 0) {
      setPosition((oldPosition) => [oldPosition[0], oldPosition[1] + 1]);
    }
  };

  return (
    <>
      <Grid position={position} />
      <button onClick={handleMoveForward}>Move forward</button>
      <button>Turn</button>
    </>
  );
}

export default App;
