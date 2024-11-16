import { FiFilter } from "react-icons/fi";
import { MdLockReset } from "react-icons/md";

const FilterBar = () => {
  return (
    <div className="bg-gray-200 rounded-t-md shadow-xl p-4 min-h-screen">
      <div className="flex items-center gap-4">
        <FiFilter size={24} />
        <h2 className="font-semibold text-xl">Filters</h2>
      </div>
      <div className="mt-4">
        <div className="my-3">
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue={"selectedItem"}
          >
            <option disabled value={"selectedItem"}>
              Who shot first?
            </option>
            <option value={"asc"}>Low To High</option>
            <option value={"desc"}>High To Low</option>
          </select>
        </div>
        <div className="my-3">
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue={"selectedItem"}
          >
            <option disabled value={"selectedItem"}>
              Who shot first?
            </option>
            <option value={"asc"}>Low To High</option>
            <option value={"desc"}>High To Low</option>
          </select>
        </div>
      </div>
      <button className="btn btn-block btn-outline">
        Reset <MdLockReset size={24} />
      </button>
    </div>
  );
};

export default FilterBar;
