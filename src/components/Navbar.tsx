import { NavLink } from "react-router-dom";
import logo from "../assets/logo_do1.png"
const Navbar = () => {
  // Diese Funktion bestimmt das Aussehen basierend auf dem Status "isActive"
  const activeClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition duration-200 p-2 ${
      isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"
    }`;

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-gray-900 text-white sticky top-0 z-50">
      <NavLink to="/" className="flex items-center gap-3 hover:opacity-90 transition">
        <img src={logo} alt="David Logo" className="h-8 w-auto" />
        <span className="text-xl font-bold tracking-tight">David Ong</span>
      </NavLink>

      <div className="flex gap-4 md:gap-6">
        {/* NavLink  übergeben die activeClass Funktion an className */}
        <NavLink title="Home" to="/" className={activeClass}>Home</NavLink>
        <NavLink title="Projekte" to="/projects" className={activeClass}>Projekte</NavLink>
        <NavLink title="Skills" to="/skills" className={activeClass}>Skills</NavLink>
        <NavLink title="Über mich" to="/about" className={activeClass}>Über mich</NavLink>
        <NavLink title="Kontakt" to="/contact" className={activeClass}>Kontakt</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;