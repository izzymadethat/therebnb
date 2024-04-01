import { Link } from "react-router-dom";
import { navLinks } from "../constants/";

export default function Navbar() {
  return (
    <nav className="">
      {/* Desktop version */}
      <ul className="hidden lg:flex gap-4 text-base font-semibold">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="hover:text-blue-600 transition-all duration-300"
          >
            {link.title}
          </Link>
        ))}
      </ul>

      {/* Mobile Version --to do */}
    </nav>
  );
}
