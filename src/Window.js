import React, { useCallback, useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Window.css';
import MinimizeAnimation from './MinimizeAnimation';
import { AppContext, minimizeWindow } from './appReducer';

export default function Window({ windowId }) {
  const { state, dispatch } = useContext(AppContext);
  const { title, icon, Component, passThroughProps, isMinimized } = state.windowById[windowId];
  const windowRef = useRef(null);
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

  const handleMinimizeClick = useCallback(() => {
    dispatch(minimizeWindow(windowId));
  }, [dispatch, windowId]);

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

  return (
    <MinimizeAnimation in={!isMinimized}>
    <div style={{ width, top: posY, left: posX }} className="window Window" ref={windowRef}>
      <div className="title-bar" onMouseDown={handleDragStart}>
        <div className="title-bar-text Window-Title">
          <span className={clsx('Window-Title-Icon', icon)}></span>
          {title}
        </div>
        <div className="title-bar-controls">
          <button type="button" aria-label="Minimize" onClick={handleMinimizeClick} />
          <button type="button" aria-label="Maximize" />
          <button type="button" aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <Component {...passThroughProps} />
      </div>
    </div>
    </MinimizeAnimation>
  );
}

Window.propTypes = {
  windowId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
