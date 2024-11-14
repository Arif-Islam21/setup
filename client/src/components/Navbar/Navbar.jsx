import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Shop</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-2 menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2 items-center">
          <a className="btn bg-gray-400 rounded-md items-center text-black border border-black btn-sm">
            Sign In
          </a>
          <a className="btn bg-black rounded-md items-center text-white btn-sm">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
