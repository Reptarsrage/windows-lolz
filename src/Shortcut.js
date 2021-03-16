import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Shortcut.css';
import { AppContext } from './appReducer';

export default function Shortcut({ shortcutId }) {
  const { state } = useContext(AppContext);
  const { text, icon, column, row } = state.desktopShortcutById[shortcutId];

  const style = {};
  if (column) {
    style.gridColumn = column;
  }

  if (row) {
    style.gridRow = row;
  }

  return (
    <div className="Shortcut" style={style}>
      <span className={clsx('Shortcut-Icon', icon)}></span>
      <span className="Shortcut-Text">{text}</span>
    </div>
  );
}

Shortcut.propTypes = {
  shortcutId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
