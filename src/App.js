import React, { useCallback, useState } from "react";

import "./App.css";
import Clock from "./Clock";
import Window from "./Window";
import Shortcut from "./Shortcut";
import StartMenu from "./StartMenu";

export default function App() {
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const handleStartClick = useCallback((event) => {
    // this can behave strangely with the StartMenu's mousedown detection
    // so we just make sure that this is the only handler
    event.preventDefault();
    event.stopPropagation();
    setStartMenuOpen((prevVal) => !prevVal);
  }, []);

  const handleStartClose = useCallback(() => {
    setStartMenuOpen(false);
  }, []);

  return (
    <>
      <main className="App-Desktop">
        {/* TODO: Add desktop shortcuts */}
        <Shortcut text="My Computer" icon="bg-computer_explorer_5" column={1} />
        <Shortcut
          text="My Documents"
          icon="bg-directory_open_file_mydocs_4"
          column={1}
        />
        <Shortcut text="Internet Explorer" icon="bg-msie1_2" column={1} />
        <Shortcut text="Network" icon="bg-network_cool_two_pcs_0" column={1} />
        <Shortcut text="Recycle Bin" icon="bg-recycle_bin_empty_4" column={1} />
        <Shortcut
          text="Setup MSN Internet Assistant"
          icon="bg-msn2_0"
          column={1}
        />
        <Shortcut
          text="Outlook Express"
          icon="bg-outlook_express_4"
          row={2}
          column={2}
        />
        <Shortcut
          text="Online Services"
          icon="bg-directory_closed_4"
          row={1}
          column={2}
        />

        {/* TODO: Add support for multiple windows */}
        <Window />

        <StartMenu in={startMenuOpen} onClose={handleStartClose} />
      </main>

      <footer>
        <nav className="App-TaskBar">
          <button type="button" className="App-TaskBar-StartButton"  onMouseDown={handleStartClick}>
            <span className="bg-windows_4"></span>
            Start
          </button>
          {/* TODO: Add window task bar entries */}
          <span className="App-TaskBar-Tab">Counter</span>
          <span className="App-TaskBar-Tray">
            {/* TODO: Add tray icons */}
            <Clock />
          </span>
        </nav>
      </footer>
    </>
  );
}
