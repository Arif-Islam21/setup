import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline, IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="bg-gray-200 px-8 pt-4  border-r-2 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">Gadget Shop</h1>
      <ul className="flex flex-col gap-2">
        <li className="py-2 px-4 text-start border-2 rounded-md border-gray-300 bg-white hover:bg-black/10 transition-colors delay-150">
          <NavLink
            className={"flex items-center gap-3 text-xl font-bold"}
            to={"/dashboard/overview"}
          >
            <GrOverview />
            Overview
          </NavLink>
        </li>
        <li className="py-2 px-4 text-start border-2 rounded-md border-gray-300 bg-white hover:bg-black/10 transition-colors delay-150">
          <NavLink
            className={"flex items-center gap-3 text-xl font-bold"}
            to={"/"}
          >
            <IoHomeOutline />
            Home
          </NavLink>
        </li>
        <li className="py-2 px-4 text-start border-2 rounded-md border-gray-300 bg-white hover:bg-black/10 transition-colors delay-150">
          <button className={"flex items-center gap-3 text-xl font-bold"}>
            <IoLogOutOutline />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
