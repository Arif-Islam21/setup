import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";

const useUserData = () => {
  const { user, loading } = useAuth();
  const [userData, setUserData] = useState([]);
  const axiosCommon = useAxiosCommon();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axiosCommon.get(
          `https://gadget-shop-server-steel.vercel.app/user/${user.email}`
        );
        setUserData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (user?.email && !loading) {
      fetchUserData();
    }
  }, [user, loading]);

  return userData;
};

export default useUserData;
