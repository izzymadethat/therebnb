import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
  return (
    <div>
      <form className="flex items-center relative">
        <input
          type="text"
          className="w-96 px-8 py-2 rounded-full border-none outline-none text-blue-600 font-semibold"
        />
        <FaSearch className="absolute right-4 size-5 text-blue-600" />
      </form>
    </div>
  );
}
