import { NavLink } from "react-router-dom";
import logo from "../assets/logo_do1.png";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";          
    return window.matchMedia("(prefers-color-scheme: dark)").matches;  
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const activeClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition duration-200 p-2 ${
      isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"
    }`;

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-gray-900 text-white sticky top-0 z-50">
      <NavLink to="/" className="flex items-center gap-3 hover:opacity-90 transition">
        <img src={logo} alt="David Ong Logo" className="h-8 w-auto" />
        <span className="text-xl font-bold tracking-tight">David Ong</span>
      </NavLink>

      <div className="flex items-center gap-6 md:gap-8">
        <NavLink title="Home" to="/" className={activeClass}>
          Home
        </NavLink>
        <NavLink title="Projekte" to="/projects" className={activeClass}>
          Projekte
        </NavLink>
        <NavLink title="Skills" to="/skills" className={activeClass}>
          Skills
        </NavLink>
        <NavLink title="Über mich" to="/about" className={activeClass}>
          Über mich
        </NavLink>
        <NavLink title="Kontakt" to="/contact" className={activeClass}>
          Kontakt
        </NavLink>

        {/* Dark-Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-slate-800 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-slate-300" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;