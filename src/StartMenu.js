import React, { useCallback, useEffect, useRef } from "react";

import "./StartMenu.css";
import GrowAnimation from "./GrowAnimation";
import StartMenuItem from "./StartMenuItem";

export default function StartMenu({ in: inProp, onClose }) {
  const startMenuRef = useRef(null);
  const items = [
    {
      id: "update",
      icon: "bg-windows_update_large_1",
      text: "Windows Update",
      hasSubMenu: false,
    },
    {
      id: "separator-1",
      isSeparator: true,
    },
    {
      id: "programs",
      icon: "bg-appwiz_file_0",
      text: (
        <>
          <u>P</u>rograms
        </>
      ),
      hasSubMenu: true,
    },
    {
      id: "favorites",
      icon: "bg-directory_favorites_0",
      text: (
        <>
          F<u>a</u>vorites
        </>
      ),
      hasSubMenu: true,
    },
    {
      id: "documents",
      icon: "bg-directory_open_file_mydocs_0",
      text: (
        <>
          <u>D</u>ocuments
        </>
      ),
      hasSubMenu: true,
    },
    {
      id: "settings",
      icon: "bg-settings_gear_0",
      text: (
        <>
          <u>S</u>ettings
        </>
      ),
      hasSubMenu: true,
    },
    {
      id: "find",
      icon: "bg-search_file_2_0",
      text: (
        <>
          <u>F</u>ind
        </>
      ),
      hasSubMenu: true,
    },
    {
      id: "help",
      icon: "bg-help_book_small_0",
      text: (
        <>
          <u>H</u>elp
        </>
      ),
      hasSubMenu: false,
    },
    {
      id: "run",
      icon: "bg-application_hourglass_small_0",
      text: (
        <>
          <u>R</u>un...
        </>
      ),
      hasSubMenu: false,
    },
    {
      id: "separator-2",
      isSeparator: true,
    },
    {
      id: "log off",
      icon: "bg-key_win_0",
      text: (
        <>
          <u>L</u>og Off...
        </>
      ),
      hasSubMenu: false,
    },
    {
      id: "shut down",
      icon: "bg-shut_down_normal_0",
      text: (
        <>
          Sh<u>u</u>t Down...
        </>
      ),
      hasSubMenu: false,
    },
  ];

  const handleClickOutside = useCallback(
    (event) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target)
      ) {
        onClose();
      }
    },
    [onClose]
  );

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
          {items.map(({ id, icon, text, hasSubMenu, isSeparator }) =>
            isSeparator ? (
              <hr key={id} />
            ) : (
              <StartMenuItem
                key={id}
                icon={icon}
                text={text}
                hasSubMenu={hasSubMenu}
              />
            )
          )}
        </ul>
      </div>
    </GrowAnimation>
  );
}
