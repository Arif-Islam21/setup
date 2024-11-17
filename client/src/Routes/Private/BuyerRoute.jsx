import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";
import Loader from "../../components/Loader";

// eslint-disable-next-line react/prop-types
const BuyerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const userData = useUserData();
  const location = useLocation();

  if (loading || !userData.role) {
    return <Loader />;
  }
  if (user && userData.role === "buyer") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default BuyerRoute;
