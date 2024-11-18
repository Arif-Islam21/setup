import axios from "axios";

const useAxiosSecure = () => {
  const token = localStorage.getItem("accessToken");
  const axiosSecure = axios.create({
    baseURL: "http://localhost:4000",
    headers: `Bearar ${token}`,
  });

  return axiosSecure;
};

export default useAxiosSecure;
