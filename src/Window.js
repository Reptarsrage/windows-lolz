import React from "react";

import "./Window.css";

export default function App() {
  const [count, setCount] = React.useState(0);

  const incrementCount = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrementCount = React.useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const resetCount = React.useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div style={{ width: 300, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className="window Window">
      <div className="title-bar">
        <div className="title-bar-text">Counter</div>
        <div className="title-bar-controls">
          <button type="button" aria-label="Minimize" />
          <button type="button" aria-label="Maximize" />
          <button type="button" aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <p style={{ textAlign: "center" }}>Current count: {count}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button type="button" onClick={incrementCount}>
            +
          </button>
          <button type="button" onClick={decrementCount}>
            -
          </button>
          <button type="button" onClick={resetCount}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

