import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../components/Loader";
import useUserData from "../../Hooks/useUserData";

// eslint-disable-next-line react/prop-types
const SellerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const userData = useUserData();
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (user && userData.role === "seller") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;
