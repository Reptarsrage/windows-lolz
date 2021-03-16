import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './TaskbarTab.css';
import { AppContext } from './appReducer';
import clsx from 'clsx';

export default function TaskbarTab({ windowId }) {
  const { state } = useContext(AppContext);
  const { title, icon } = state.windowById[windowId];

  return (
    <span className={clsx('TaskbarTab', 'TaskbarTab-Active')}>
      <span className={clsx('TaskbarTab-Icon', icon)}></span>
      {title}
    </span>
  );
}

TaskbarTab.propTypes = {
  windowId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
