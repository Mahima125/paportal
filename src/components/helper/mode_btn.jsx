import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const mode_btn = () => {
  let [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <button
      className="modeSwitch bg-transparent p-0 "
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      {darkMode ? (
        <BsFillMoonStarsFill />
      ) : (
        <BsFillSunFill style={{ color: "black" }} />
      )}
    </button>
  );
};

export default mode_btn;