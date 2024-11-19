import { FaSearchengin } from "react-icons/fa6";
import { MdLockReset } from "react-icons/md";
import useAxiosCommon from "../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { Form } from "react-router-dom";
import Loader from "../components/Loader";

const About = () => {
  const axiosCommon = useAxiosCommon();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [sorting, setSorting] = useState("asc");

  const { data, isLoading } = useQuery({
    queryKey: ["for-you", search, category, brand, sorting],
    queryFn: async () => {
      const { data } = await axiosCommon.get(
        `/for-you?search=${search}&Category=${category}&brand=${brand}&sorting=${sorting}`
      );
      return data;
    },
  });
  const products = data.products;

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setBrand("");
    setSorting("asc");
    window.location.reload();
  };

  // console.log(data);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">
        Special Products for you
      </h1>
      <div className="flex items-center justify-between my-4">
        <form onSubmit={handleSearch} className="join">
          <input
            type="text"
            placeholder="Search Item"
            defaultValue={search}
            name="search"
            className="input input-bordered border-black join-item"
          />
          <button className="btn btn-outline  join-item">
            <FaSearchengin size={26} />
          </button>
        </form>
        <select
          className="select select-bordered w-full max-w-36"
          defaultValue={"selected"}
          onChange={(e) => {
            setCategory(e.target.value);
            // refetch();
          }}
        >
          <option disabled value={"selected"}>
            Category
          </option>
          <option value={"tablet"}>Tablet</option>
          <option value={"phone"}>Phone</option>
        </select>
        <select
          className="select select-bordered w-full max-w-36"
          defaultValue={"selected"}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled value={"selected"}>
            Brand
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select
          className="select select-bordered w-full max-w-36"
          defaultValue={"asc"}
          onChange={(e) => setSorting(e.target.value)}
        >
          <option value={"asc"}>Low to high</option>
          <option value={"des"}>High to low</option>
        </select>
        <button onClick={handleReset} className="btn btn-outline">
          Reset <MdLockReset size={28} />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {isLoading ? (
          <Loader />
        ) : (
          products?.map((item) => <ProductCard key={item._id} product={item} />)
        )}
      </div>
    </div>
  );
};

export default About;
