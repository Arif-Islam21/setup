// eslint-disable-next-line react/prop-types
const SortByPrice = ({ setSort }) => {
  return (
    <select
      className="select select-bordered w-full max-w-xs"
      onChange={(e) => setSort(e.target.value)}
    >
      <option value={"asc"}>Low To High</option>
      <option value={"desc"}>High To Low</option>
    </select>
  );
};

export default SortByPrice;
