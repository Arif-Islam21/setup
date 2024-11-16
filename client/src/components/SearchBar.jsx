import { FaSearch } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ handleSearch }) => {
  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center">
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
