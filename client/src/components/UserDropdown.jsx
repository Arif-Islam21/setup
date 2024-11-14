import useAuth from "../Hooks/useAuth";
import avater from "/user.png";

const UserDropdown = () => {
  const { user } = useAuth();
  return (
    <div className="dropdown pr-4">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className=" w-10 rounded-full">
            <img src={user?.photoURL ? user?.photoURL : avater} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] py-2 shadow"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
