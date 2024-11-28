import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`flex justify-between items-center px-4 py-4 ${
        darkMode ? "bg-gray-600 text-white" : "bg-blue-600 text-white"
      } shadow-lg`}
    >
      <h1 className="text-2xl font-bold">My CV</h1>
      <button
        onClick={toggleDarkMode}
        className={`flex items-center p-2 rounded-md shadow-md hover:bg-gray-200 transition ${
          darkMode ? "bg-white text-yellow-200" : "bg-gray-800 text-white"
        }`}
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
    </header>
  );
};

export default Header;
