const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="flex justify-between items-center px-4 py-4 bg-blue-600 text-white shadow-lg">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-white text-blue-600 rounded-md shadow-md hover:bg-gray-200 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
