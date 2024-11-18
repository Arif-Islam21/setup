import { useEffect, useState } from "react";
import useUserData from "../../../Hooks/useUserData";
import NoProductPage from "../../../components/NoProductPage";
import ProductCard from "../../../components/ProductCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyWishlist = () => {
  const [wishList, setWishList] = useState([]);
  const [latestData, setLatestData] = useState(true);
  const userData = useUserData();
  const token = localStorage.getItem("accessToken");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchWishList = async () => {
      axiosSecure
        .get(
          `https://gadget-shop-server-steel.vercel.app/wishlist/${userData._id}`
        )
        .then((res) => {
          setWishList(res.data);
          console.log(res.data);
        });
    };

    if (userData._id && token) {
      fetchWishList();
    }
  }, [token, userData._id, latestData]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">My Wishlist</h1>
      <div className="grid grid-cols-3 gap-4">
        {wishList.length > 0 ? (
          wishList.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              isInWishlist
              setLatestData={setLatestData}
            />
          ))
        ) : (
          <NoProductPage />
        )}
      </div>
    </div>
  );
};

export default MyWishlist;
