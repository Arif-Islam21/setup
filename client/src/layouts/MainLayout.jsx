import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h2>Header</h2>
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
};

export default MainLayout;
