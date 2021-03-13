import React from "react";

import "./StartMenuItem.css";
import clsx from "clsx";

export default function StartMenuItem({ icon, text, hasSubMenu }) {
  return (
    <li className="StartMenuItem">
      <span className={clsx("StartMenuItem-Icon", icon)}></span>
      <span className="StartMenuItem-Text">{text}</span>
      {hasSubMenu && <span className="StartMenuItem-Expand">&#9658;</span>}
    </li>
  );
}
