import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div>
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Search Products"
          name="search"
          className="max-w-md p-[11px] border rounded-r-none rounded-l-xl"
        />
        <button className="btn btn-outline bg-gray-300 rounded-l-none">
          <FaSearch size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
