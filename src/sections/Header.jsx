import { Link } from "react-router-dom";
import mainLogo from "../assets/images/tbb-logo.svg";
import { Navbar, Searchbar } from "../components";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4 sticky top-0 left-0 z-50 backdrop-blur-md shadow-md bg-blue-50">
      {/* Logo */}
      <Link className="max-w-24 flex items-end gap-2">
        <img src={mainLogo} alt="logo" className="w-6" />
        <h2 className="text-3xl font-bold text-blue-500 hover:text-blue-600 transition-all duration-200 flex items-center">
          ThereBnb <span className="text-sm">&trade;</span>
        </h2>
      </Link>
      <Searchbar />
      <Navbar />
    </header>
  );
}
