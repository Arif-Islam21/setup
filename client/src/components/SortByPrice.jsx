const SortByPrice = () => {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option value={"asc"}>Low To High</option>
      <option value={"desc"}>High To Low</option>
    </select>
  );
};

export default SortByPrice;
