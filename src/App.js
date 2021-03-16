import React, { useCallback, useState, useMemo } from 'react';
import { useImmerReducer } from 'use-immer';

import './App.css';
import Clock from './Clock';
import Window from './Window';
import Shortcut from './Shortcut';
import StartMenu from './StartMenu';
import TaskbarTab from './TaskbarTab';
import appReducer, { initialState, AppContext } from './appReducer';

export default function App() {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [state, dispatch] = useImmerReducer(appReducer, initialState);
  const appContext = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const { allWindowIds, allDesktopShortcutIds } = state;

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

  const handleDrop = useCallback((event) => {
    // by default, data/elements cannot be dropped in other elements
    // to allow a drop, you must prevent the default handling of the element when dragover
    event.preventDefault();
  }, []);

  return (
    <AppContext.Provider value={appContext}>
      <main className="App-Desktop" onDragOver={handleDrop}>
        {/* all desktop shortcuts */}
        {allDesktopShortcutIds.map((id) => (
          <Shortcut key={id} shortcutId={id} />
        ))}

        {/* all open windows */}
        {allWindowIds.map((id) => (
          <Window key={id} windowId={id} />
        ))}

        {/* start menu */}
        <StartMenu in={startMenuOpen} onClose={handleStartClose} />
      </main>

      <footer>
        <nav className="App-TaskBar">
          {/* start button */}
          <button type="button" className="App-TaskBar-StartButton" onMouseDown={handleStartClick}>
            <span className="bg-windows_4"></span>
            Start
          </button>

          {/* all taskbar tabs */}
          {allWindowIds.map((id) => (
            <TaskbarTab key={id} windowId={id} />
          ))}

          {/* taskbar tray */}
          <span className="App-TaskBar-Tray">
            {/* TODO: Add tray icons */}
            <Clock />
          </span>
        </nav>
      </footer>
    </AppContext.Provider>
  );
}
