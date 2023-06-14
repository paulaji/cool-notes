import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  const [buttonClickCount, setButtonClickCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Namaskaaram kootukaare!</p>
        <Button onClick={() => setButtonClickCount(buttonClickCount + 1)}>
          Jagathy ittu {buttonClickCount} Bomb!
        </Button>
        <Button onClick={() => setButtonClickCount(buttonClickCount - 1)}>
          Ittilla
        </Button>
      </header>
    </div>
  );
}

export default App;
