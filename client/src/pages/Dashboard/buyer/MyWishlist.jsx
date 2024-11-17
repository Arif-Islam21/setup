import { useEffect, useState } from "react";
import useUserData from "../../../Hooks/useUserData";
import axios from "axios";
import NoProductPage from "../../../components/NoProductPage";
import ProductCard from "../../../components/ProductCard";

const MyWishlist = () => {
  const [wishList, setWishList] = useState([]);
  const [latestData, setLatestData] = useState(true);
  const userData = useUserData();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchWishList = async () => {
      axios
        .get(`http://localhost:4000/wishlist/${userData._id}`, {
          headers: {
            Authorization: `Bearar ${token}`,
          },
        })
        .then((res) => {
          setWishList(res.data);
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
