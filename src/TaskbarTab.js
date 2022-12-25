import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import './TaskbarTab.css';
import { AppContext, minimizeWindow, restoreWindow } from './appReducer';
import clsx from 'clsx';

export default function TaskbarTab({ windowId }) {
  const { state, dispatch } = useContext(AppContext);
  const { title, icon, isMinimized } = state.windowById[windowId];

  const handleClick = useCallback(() => {
    if (isMinimized) {
      dispatch(restoreWindow(windowId));
    } else {
      dispatch(minimizeWindow(windowId));
    }
  }, [dispatch, windowId, isMinimized]);

  return (
    <span role="button" className={clsx('TaskbarTab', isMinimized ? 'TaskbarTab-Inactive' : 'TaskbarTab-Active')} onClick={handleClick} data-window={windowId}>
      <span className={clsx('TaskbarTab-Icon', icon)}></span>
      {title}
    </span>
  );
}

TaskbarTab.propTypes = {
  windowId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
