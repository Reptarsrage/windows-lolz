import React from "react";

import "./App.css";
import imgSrc from "./img/start-button.png";
import Clock from "./Clock";
import Window from "./Window";
import Shortcut from "./Shortcut";

export default function App() {
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
        <Shortcut
          text="Network"
          icon="bg-network_cool_two_pcs_0"
          column={1}
        />
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
      </main>
      <footer>
        <nav className="App-TaskBar">
          <button>
            <img src={imgSrc} alt="start" />
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
