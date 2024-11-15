import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="bg-gray-200 px-8 pt-4  border-r-2 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">Gadget Shop</h1>
      <ul className="flex flex-col gap-2">
        <li className="btn">
          <NavLink
            className={"flex items-center gap-3 text-xl font-bold"}
            to={"/dashboard/overview"}
          >
            <GrOverview />
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
