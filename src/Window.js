import React, { useCallback, useState, useRef, useEffect } from 'react';

import './Window.css';

export default function App() {
  const windowRef = useRef(null);
  const [count, setCount] = useState(0);
  const [width] = useState(300);
  const [posX, setPosX] = useState(window.innerWidth / 2 - width);
  const [posY, setPosY] = useState(window.innerHeight / 2);
  const [shiftX, setShiftX] = useState(0);
  const [shiftY, setShitY] = useState(0);
  const [dragging, setDragging] = useState(false);

  const handleDrag = useCallback(
    (event) => {
      const taskBarHeight = 30; // 30px height of the bottom taskbar
      const buffer = 12; // 12px of buffer so that use doesn't drag window off screen
      setPosX(Math.min(window.innerWidth - buffer, Math.max(buffer - width, event.pageX - shiftX)));
      setPosY(Math.min(window.innerHeight - taskBarHeight - buffer, Math.max(0, event.pageY - shiftY))); // 30 = taskbar height
    },
    [shiftX, shiftY, width]
  );

  const handleDragEnd = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleDragEnd);

      return () => {
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', handleDragEnd);
      };
    }
  }, [dragging, handleDrag, handleDragEnd]);

  const handleDragStart = useCallback(
    (event) => {
      setDragging(true);
      setShiftX(event.clientX - posX);
      setShitY(event.clientY - posY);
    },
    [posX, posY]
  );

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrementCount = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div style={{ width, top: posY, left: posX }} className="window Window" ref={windowRef}>
      <div className="title-bar" onMouseDown={handleDragStart}>
        <div className="title-bar-text">Counter</div>
        <div className="title-bar-controls">
          <button type="button" aria-label="Minimize" />
          <button type="button" aria-label="Maximize" />
          <button type="button" aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <p style={{ textAlign: 'center' }}>Current count: {count}</p>
        <div className="field-row" style={{ justifyContent: 'center' }}>
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
