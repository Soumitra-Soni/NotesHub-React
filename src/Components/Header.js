import React from "react";
import { CgDarkMode } from "react-icons/cg";
const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes.App</h1>
      <button
        className="link"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        <CgDarkMode size="2em" />
      </button>
    </div>
  );
};
export default Header;
