import React, { useCallback, useEffect, useRef } from "react";

import "./StartMenu.css";
import GrowAnimation from "./GrowAnimation";

export default function StartMenu({ in: inProp, onClose }) {
  const startMenuRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (startMenuRef.current && !startMenuRef.current.contains(event.target)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <GrowAnimation in={inProp} timeout={200} unmountOnExit>
      <div ref={startMenuRef} className="window StartMenu">
        <div className="StartMenu-Logo">
          <b>Windows</b>98
        </div>
        <ul className="StartMenu-List">
          <li className="StartMenu-Item">
            <span className="StartMenu-Item-Icon bg-windows_update_large_1"></span>
            <span className="StartMenu-Item-Text">Windows Update</span>
          </li>

          <hr />

          <li className="StartMenu-Item">
            <span className="StartMenu-Item-Icon bg-appwiz_file_0"></span>
            <span className="StartMenu-Item-Text">
              <u>P</u>rograms
            </span>
            <span className="StartMenu-Item-Expand">&#9658;</span>
          </li>

          <li className="StartMenu-Item">
            <span className="StartMenu-Item-Icon bg-directory_favorites_0"></span>
            <span className="StartMenu-Item-Text">
              F<u>a</u>vorites
            </span>
            <span className="StartMenu-Item-Expand">&#9658;</span>
          </li>

          <li className="StartMenu-Item">
            <span className="StartMenu-Item-Icon bg-directory_open_file_mydocs_0"></span>
            <span className="StartMenu-Item-Text">
              <u>D</u>ocuments
            </span>
            <span className="StartMenu-Item-Expand">&#9658;</span>
          </li>

          <li className="StartMenu-Item">
            <span className="StartMenu-Item-Icon bg-settings_gear_0"></span>
            <span className="StartMenu-Item-Text">
              <u>S</u>ettings
            </span>
            <span className="StartMenu-Item-Expand">&#9658;</span>
          </li>

          <li className="StartMenu-Item">
            <span className="StartMenu-Item-Icon bg-search_file_2_0"></span>
            <span className="StartMenu-Item-Text">
              <u>F</u>ind
            </span>
            <span className="StartMenu-Item-Expand">&#9658;</span>
          </li>

          <li className="StartMenu-Item">
            <span className="StartMenu-Item-Icon bg-help_book_small_0"></span>
            <span className="StartMenu-Item-Text">
              <u>H</u>elp
            </span>
          </li>

          <li className="StartMenu-Item">
            <span className="StartMenu-Item-Icon bg-application_hourglass_small_0"></span>
            <span className="StartMenu-Item-Text">
              <u>R</u>un...
            </span>
          </li>

          <hr />

          <li className="StartMenu-Item">
            <span className="StartMenu-Item-Icon bg-key_win_0"></span>
            <span className="StartMenu-Item-Text">
              <u>L</u>og Off...
            </span>
          </li>

          <li className="StartMenu-Item">
            <span className="StartMenu-Item-Icon bg-shut_down_normal_0"></span>
            <span className="StartMenu-Item-Text">
              Sh<u>u</u>t Down...
            </span>
          </li>
        </ul>
      </div>
    </GrowAnimation>
  );
}
