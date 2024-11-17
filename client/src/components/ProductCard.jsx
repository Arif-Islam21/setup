import { MdOutlineEventAvailable } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbBrandAppgallery } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";
import useUserData from "../Hooks/useUserData";
import axios from "axios";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ProductCard = ({ product, isInWishlist, setLatestData }) => {
  const userData = useUserData();

  const handleWishlist = async () => {
    await axios
      .patch(`http://localhost:4000/wishlist/add`, {
        userEmail: userData?.email,
        productId: product._id,
      })
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product added to your wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleRemoveWishlist = async () => {
    await axios
      .patch(`http://localhost:4000/wishlist/remove`, {
        userEmail: userData?.email,
        productId: product._id,
      })
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product removed From your wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
          setLatestData((prev) => !prev);
        }
      });
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          // src="https://img.freepik.com/premium-photo/virtual-reality-glasses-tablet-with-headphones-gray-background-top-view_157927-7597.jpg?w=826"
          src={product?.photoURL}
          alt={product?.brand}
          className="h-40 object-cover w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold uppercase">{product?.title}</h2>
        <div className="flex justify-between ">
          <p className="font-semibold flex items-center gap-2">
            <TbBrandAppgallery size={20} /> {product?.brand}
          </p>
          <p className="justify-end flex items-center gap-2">
            <IoPricetagsOutline size={20} /> {product?.priceInt}
          </p>
        </div>
        <div className="flex justify-between ">
          <p className="font-semibold flex items-center gap-2">
            <MdOutlineEventAvailable size={20} /> {product?.stockInt}
          </p>
          <p className="justify-end flex items-center gap-2">
            <BiSolidCategoryAlt size={20} /> {product?.Category}
          </p>
        </div>
        <p className="font-bold text-sm">
          {product?.description.length > 50
            ? `${product?.description.slice(0, 50)}...`
            : product?.description}{" "}
        </p>
        {isInWishlist ? (
          <button
            onClick={handleRemoveWishlist}
            className="btn btn-outline btn-secondary btn-sm font-bold"
          >
            Remove from wishlist
          </button>
        ) : (
          <button
            onClick={handleWishlist}
            className="btn btn-outline btn-sm font-bold"
          >
            Add to wishlist
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
