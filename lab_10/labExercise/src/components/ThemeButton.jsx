import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#000000",
    color: theme === "light" ? "#000000" : "#ffffff",
    padding: "15px 30px",
    border: "2px solid black",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      {theme === "light" ? "Light mode" : "Dark mode"}
    </button>
  );
};

export default ThemeButton;
