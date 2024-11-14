import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import avater from "/user.png";

const UserDropdown = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className=" w-10 rounded-full">
            <img src={user?.photoURL || avater} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 w-32 rounded-box z-[1] py-2 shadow"
      >
        <li>
          <Link>DashBoard</Link>
        </li>
        <li>
          <button
            onClick={() => logOut()}
            className="btn btn-primary btn-secondary btn-sm"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
