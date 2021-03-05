import React from "react";
import clsx from "clsx";

import "./Shortcut.css";

export default function Shortcut({ text, icon, column, row }) {
  const style = {};
  if (column) {
    style.gridColumn = column
  }

  if (row) {
    style.gridRow = row
  }
  
  return (
    <div className="Shortcut" style={style}>
      <span className={clsx("Shortcut-Icon", icon)}></span>
      <span className="Shortcut-Text">{text}</span>
    </div>
  );
}
