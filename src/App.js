import React from "react";

import "./App.css";
import imgSrc from "./img/start-button.png";
import Clock from "./Clock";
import Window from "./Window";

export default function App() {
  return (
    <>
      <main className="App-Desktop">
        {/* TODO: Add desktop shortcuts */}
        {/* TODO: Add support for multiple windows */}
        <Window />
      </main>
      <footer>
        <nav className="App-TaskBar">
          <button>
            <img src={imgSrc} alt="start" />
          </button>
          {/* TODO: Add window task bar entries */}
          <span className="App-TaskBar-Tray">
            {/* TODO: Add tray icons */}
            <Clock />
          </span>
        </nav>
      </footer>
    </>
  );
}
