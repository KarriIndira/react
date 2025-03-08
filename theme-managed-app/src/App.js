import React, { useState, Suspense } from "react";
import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";

// Lazy load the components
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [activePage, setActivePage] = useState(null);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="home-container">
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme} className="toggle-button">
        {theme === "light" ? "🌞" : "🌜"}
      </button>

      <div className="button-group">
        <button onClick={() => handlePageChange("about")} className="nav-button">
          About
        </button>
        <button onClick={() => handlePageChange("contact")} className="nav-button">
          Contact
        </button>
      </div>

      <div className="content-section">
        {activePage === "about" && (
          <Suspense fallback={<div className="loader">Loading About...</div>}>
            <About />
          </Suspense>
        )}
        {activePage === "contact" && (
          <Suspense fallback={<div className="loader">Loading Contact...</div>}>
            <Contact />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default App;
