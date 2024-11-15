import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="grid lg:grid-cols-12">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9 pt-12 pl-12">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
