import { FaSearchengin } from "react-icons/fa6";
import { MdLockReset } from "react-icons/md";

const About = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">
        Special Products for you
      </h1>
      <div className="flex items-center justify-between my-4">
        <div className="join">
          <input
            type="text"
            placeholder="Search Item"
            className="input input-bordered border-black join-item"
          />
          <button className="btn btn-outline  join-item">
            <FaSearchengin size={26} />
          </button>
        </div>
        <select
          className="select select-bordered w-full max-w-36"
          defaultValue={"selected"}
        >
          <option disabled value={"selected"}>
            Category
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select
          className="select select-bordered w-full max-w-36"
          defaultValue={"selected"}
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
        >
          <option value={"asc"}>Low to high</option>
          <option value={"des"}>High to low</option>
        </select>
        <button className="btn btn-outline">
          Reset <MdLockReset size={28} />
        </button>
      </div>
    </div>
  );
};

export default About;
