import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-200 border-r-2 min-h-screen">
      <ul className="flex flex-col gap-2">
        <li>
          <Link to={"/"}>Overview</Link>
        </li>
        <li>
          <Link to={"/"}>My Products</Link>
        </li>
        <li>
          <Link to={"/"}>Add Products</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
