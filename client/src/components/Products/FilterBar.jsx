/* eslint-disable react/prop-types */
import { FiFilter } from "react-icons/fi";
import { MdLockReset } from "react-icons/md";

const FilterBar = ({
  setCategory,
  setBrand,
  handleReset,
  uniqueCategory,
  uniqueBrand,
}) => {
  return (
    <div className="bg-gray-200 rounded-t-md shadow-xl p-4 h-full min-h-screen">
      <div className="flex items-center gap-4">
        <FiFilter size={24} />
        <h2 className="font-semibold text-xl">Filters</h2>
      </div>
      <div className="mt-4">
        <div className="my-3">
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue={"selectedItem"}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled value={"selectedItem"}>
              Category
            </option>
            {uniqueCategory?.map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3">
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue={"selectedItem"}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option disabled value={"selectedItem"}>
              Brand
            </option>
            {uniqueBrand?.map((brand, idx) => (
              <option key={idx} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button onClick={handleReset} className="btn btn-block btn-outline">
        Reset <MdLockReset size={24} />
      </button>
    </div>
  );
};

export default FilterBar;
