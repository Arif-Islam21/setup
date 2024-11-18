import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import UserDropdown from "../UserDropdown";

const Navbar = () => {
  const { user } = useAuth();

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/products"}>Products</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>More Products</NavLink>
      </li>
      <li>
        <NavLink to={"/contacts"}>Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar container mx-auto">
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
            {links}
          </ul>
        </div>
        <a className=" text-2xl font-bold">Gadget Shop</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-2 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <UserDropdown />
        ) : (
          <div className="flex gap-2 items-center">
            <Link to={"/login"}>
              <button className="btn btn-outline">Sign In</button>
            </Link>
            <Link to={"/register"}>
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
