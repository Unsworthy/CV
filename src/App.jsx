import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;
